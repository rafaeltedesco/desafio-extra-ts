import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Url } from '../../types/Url';
import sequelize from '.';

const UrlModel: ModelDefined<Url, Optional<Url, 'id'>> = sequelize.define('Url', {
  originalUrl: DataTypes.STRING,
  shortnedUrl: DataTypes.STRING,
}, {
  tableName: 'urls',
  timestamps: false,
  underscored: true
});

export default UrlModel;