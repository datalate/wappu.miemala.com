import { createServer } from 'http';
import '../env/loadEnv';
import { app } from './app';
import { sequelize } from './db/sequelize';
import { logger } from './shared'; // TODO: alias?

const port = Number(process.env.PORT || 3000);

(async () => {
    await sequelize.sync();

    createServer(app)
        .listen(
            port,
            () => logger.info(`Server running on port ${ port }`));
})();
