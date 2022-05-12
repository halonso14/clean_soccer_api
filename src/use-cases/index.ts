import makeListPlayers from './list-executable-product';
import playersDb from '../data-access';

const listPlayers = makeListPlayers({ productsDb: playersDb })

const playerService = Object.freeze({
  listPlayers
})

export default playerService
export { listPlayers }