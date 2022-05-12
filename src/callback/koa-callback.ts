export default function makeKoaCallback(controller: any) {
  return async (ctx: any, next: () => Promise<any>) => {
    const httpRequest = {
      body: ctx.body,
      query: ctx.query,
      params: ctx.params,
      ip: ctx.ip,
      method: ctx.method,
      path: ctx.path,
      headers: {
        'Content-Type': ctx.get('Content-Type'),
        Referer: ctx.get('referer'),
        'User-Agent': ctx.get('User-Agent')
      }
    }
    const httpResponse = await controller(httpRequest);
    if (httpResponse.body.errorCode !== 0) {
      ctx.response.body = httpResponse.body;
    } else {
      ctx.response.body = httpResponse.body;
    }
  }
}