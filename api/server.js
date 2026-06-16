const {Readable} = require('stream');

module.exports = async (req, res) => {
  try {
    // Dynamically import the ESM server bundle built by Vite
    const serverModule = await import('../dist/server/server.js');
    const server = serverModule.default ?? serverModule;

    // Construct a Fetch API Request from the incoming Node request
    const url = new URL(req.url, `https://${req.headers.host}`);

    // Node 18+ provides global Request and Headers
    const init = {
      method: req.method,
      headers: req.headers,
      // For non-GET/HEAD methods, forward the request body stream
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    };

    const fetchReq = new Request(url.toString(), init);

    // Call the SSR handler (Cloudflare-style fetch signature)
    const response = await server.fetch(fetchReq, {}, {});

    // Copy status and headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      // Avoid sending hop-by-hop headers if present
      if (key.toLowerCase() === 'transfer-encoding') return;
      res.setHeader(key, value);
    });

    // Stream the response body back to the client
    const reader = response.body?.getReader?.();
    if (reader) {
      // ReadableStream in Node: iterate and pipe
      const encoder = new TextEncoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) res.write(Buffer.from(value));
      }
      res.end();
    } else {
      // Fallback: read as arrayBuffer
      const buf = Buffer.from(await response.arrayBuffer());
      res.end(buf);
    }
  } catch (err) {
    console.error('SSR wrapper error:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>Server error</h1><pre>' + String(err) + '</pre>');
  }
};
