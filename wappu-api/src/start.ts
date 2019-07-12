import '../env/loadEnv';

require('module-alias/register')

import {createServer} from 'http';
import {app} from './app';
import {logger} from '@shared';
import {sequelize} from "./db/sequelize";

const port = Number(process.env.PORT || 3000);

(async () => {
    await sequelize.sync({force: true});

    createServer(app)
        .listen(
            port,
            () => logger.info(`Server running on port ${port}`)
        );
})();
