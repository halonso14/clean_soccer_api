import { Model, Optional } from 'sequelize';

type PlayerAttributes = {
  id: string;
  firstName: string;
  lastName: string;
  number: number;
  height: number;
  weight: number;
}

type PlayerCreattionAttributes = Optional<PlayerAttributes, 'id'>

export default interface PlayerModel extends Model<PlayerAttributes, PlayerCreattionAttributes>, PlayerAttributes { }
