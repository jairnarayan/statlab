export async function handler(event, context) {
  try {
    const path = event.path || '/';
    const search = event.rawQueryString ? `?${event.rawQueryString}` : '';
    const url = new URL(`${path}${search}`, `https://${event.headers?.host || 'example.com'}`);

    const serverModule = await import('../../dist/server/server.js');
    const server = serverModule.default ?? serverModule;

    const body = event.body && event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : event.body;

    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: event.headers || {},
      body: ['GET', 'HEAD'].includes(event.httpMethod) ? undefined : body,
    });

    const response = await server.fetch(request, {}, {});
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    const responseBody = response.body ? Buffer.from(await response.arrayBuffer()) : null;

    return {
      statusCode: response.status,
      headers,
      body: responseBody ? responseBody.toString('base64') : '',
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error('SSR handler error:', error);
    return {
      statusCode: 500,
      body: `Server error: ${error.message}`,
    };
  }
}
