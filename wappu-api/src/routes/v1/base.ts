// Init router and path
import { Router } from "express";
//import UserRouter from './users/Users';

const router = Router();
const path = '/v1';

// Add sub-routes
//router.use(UserRouter.path, UserRouter.router);

// Export the base-router
export default { router, path };
