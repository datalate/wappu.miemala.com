import '../env/loadEnv';
import {createServer} from 'http';
import {app} from './app';
import {logger} from './shared'; // TODO: alias?
import {sequelize} from "./db/sequelize";

const port = Number(process.env.PORT || 3000);

(async () => {
    await sequelize.sync();

    createServer(app)
        .listen(
            port,
            () => logger.info(`Server running on port ${port}`)
        );
})();
