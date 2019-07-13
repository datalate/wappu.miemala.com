import {Router} from 'express';
import TrackRouter from './tracks/tracks';

// TODO: subroute for Programs (performed)

// Init router and path
const router = Router();
const path = '/v1';

// Add sub-routes
router.use(TrackRouter.path, TrackRouter.router);

// Export the base-router
export default {router, path};
