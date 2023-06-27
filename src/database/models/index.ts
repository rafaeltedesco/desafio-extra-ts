import { Sequelize } from 'sequelize';
import sequelizeConnectionConfig from '../config/database';

const sequelize = new Sequelize(sequelizeConnectionConfig);

export default sequelize;