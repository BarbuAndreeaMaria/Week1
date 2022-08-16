import { Router } from 'express';
import {
  getTaskList,
  addAnotherTask
} from './controllers.js';

export const taskSSRRoutes = () => {
  const router = Router();

  router.route('/').get(getTaskList);
  router.route('/add').post(addAnotherTask);
  //router.route('/remove').post(resetTasks);

  return router;
};
