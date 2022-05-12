import { DataTypes, Sequelize } from 'sequelize';
import PlayerModel from './types';

export default function buildPlayerModel(sequelize: Sequelize) {
  const Players = sequelize.define<PlayerModel>(
    'players',
    {
      id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        field: 'player_id',
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'player_first_name',
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'player_first_name',
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'player_number',
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'player_height',
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'player_weight',
      },
    },
    {
      tableName: 'players',
      schema: 'public',
    }
  );

  sequelize.sync();

  return Players;
}