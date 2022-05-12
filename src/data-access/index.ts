import makePlayersDb from './players-db'
import PlayerModel from './sequelize';

export async function makeDb() {
  return PlayerModel
}

const playersDb = makePlayersDb({ makeDb })
export default playersDb