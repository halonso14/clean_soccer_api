import { Sequelize } from 'sequelize';
import buildPlayerModel from './player';

const sequelize = new Sequelize(
  'TABLE',
  'username',
  'password',
  {
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

const PlayerModel = buildPlayerModel(sequelize);

export default PlayerModel