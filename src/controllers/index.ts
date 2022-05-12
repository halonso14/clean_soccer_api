import { listPlayers } from '../use-cases'
import makeGetPlayers from './get-players'

const getPlayers = makeGetPlayers({ listPlayers })

const playerController = Object.freeze({
  getPlayers,
})

export default playerController
export { getPlayers }