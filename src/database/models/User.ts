import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import sequelize from '.';
import { User } from '../../types/User';
import UrlModel from './Url';

export type UserModelCreationType =  ModelDefined<User, Optional<User, 'id' | 'status'>>
export type UserModelType = Model<User, Optional<User, 'id' | 'status'>>

const UserModel: UserModelCreationType= sequelize.define('User', { 
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  status: DataTypes.INTEGER,
  activationCode: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true
});

UserModel.hasMany(UrlModel, {
  as: 'urls',
  foreignKey: 'id'
});
UrlModel.belongsTo(UserModel, {
  as: 'users',
  foreignKey: 'id'
});

export default UserModel;