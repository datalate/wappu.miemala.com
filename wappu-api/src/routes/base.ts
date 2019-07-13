import {Router} from 'express';
import ApiVersion1Router from './v1/base';

// Init router and path
const router = Router();
const path = '/api';

// Add sub-routes
router.use(ApiVersion1Router.path, ApiVersion1Router.router);

// Export the base-router
export default {router, path};
