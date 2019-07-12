import {Sequelize} from 'sequelize-typescript';

// const env = process.env.NODE_ENV || "development";
// const config = require("/../config.json")[env];
// const url = config.url || process.env.DATABASE_CONNECTION_URI;

// TODO: use configured parameters

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    database: 'wappu-api',
    storage: ':memory:',
    models: [__dirname + '/models']
});
