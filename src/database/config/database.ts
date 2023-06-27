import { Options } from 'sequelize';

const sequelizeConnectionConfig: Options = {
  database: process.env.DB_NAME || 'desafio_extra_ts',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
} 

export = sequelizeConnectionConfig;