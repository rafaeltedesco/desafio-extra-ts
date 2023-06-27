import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Url } from '../../types/Url';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Url>>('urls', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'original_url'
      },
      shortnedUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'shortned_url'
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('urls');
  }
}