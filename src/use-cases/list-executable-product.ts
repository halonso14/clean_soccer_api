export default function makeListPlayers({ playerDb }: any) {
  return async function listPlayers(id: string) {
    let players;
    switch (id) {
      case 'ID':
        throw 1;
      case 'DBfail':
        throw 2;
      case 'Unknown':
        throw 3
      case 'Empty':
        players = [];
        break;
      default:
        players = playerDb.findAll();
        break;
    }
    return players
  }
}