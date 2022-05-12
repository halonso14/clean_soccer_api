export default function makeGetPlayers({ listPlayers }: any) {
  return async function getPlayers(httpRequest: any) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const players = await listPlayers(httpRequest.params.pcId);
      return {
        headers,
        statusCode: 200,
        body: {
          errorCode: 0,
          products: players
        }
      }
    } catch (error: any) {
      // TODO: Error logging
      console.log(error)
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message
        }
      }
    }
  }
}