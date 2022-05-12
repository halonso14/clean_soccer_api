export default function makePlayersDb({ makeDb }: any) {
  return Object.freeze({
    findAll,
  })

  async function findAll() {
    const playerModel = await makeDb()
    const result = await playerModel.findAll({
      raw: true,
    })
    return result;
  }
}