import { DataTypes, Model, QueryInterface } from 'sequelize';
import { User } from '../../types/User';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'activation_code'
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  }
}