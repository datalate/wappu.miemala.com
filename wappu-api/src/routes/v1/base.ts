import {Router} from 'express';
import ProgramRouter from './programs/programs';
import TrackRouter from './tracks/tracks';

// Init router and path
const router = Router();
const path = '/v1';

// Add sub-routes
router.use(TrackRouter.path, TrackRouter.router);
router.use(ProgramRouter.path, ProgramRouter.router);

// Export the base-router
export default {router, path};
