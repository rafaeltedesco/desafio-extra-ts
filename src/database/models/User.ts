import { DataTypes, ModelDefined, Optional } from 'sequelize';
import sequelize from '.';
import { User } from '../../types/User';
import UrlModel from './Url';

const UserModel: ModelDefined<User, Optional<User, 'id'>> = sequelize.define('User', { 
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  status: DataTypes.INTEGER,
  activationCode: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true
});

UserModel.hasMany(UrlModel);
UrlModel.belongsTo(UserModel);

export default UserModel;