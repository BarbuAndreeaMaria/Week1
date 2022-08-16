import { Router } from 'express';
import { taskSSRRoutes } from './todo-ssr/index.js';
import { taskRestRoutes } from './todo-rest/index.js';

export const appRoutes = () => {
  const router = Router();
  router.use('/', taskSSRRoutes());
  router.use('/api', taskRestRoutes());

  return router;
};