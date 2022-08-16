import { json, Router } from 'express';
import {
  addAnotherTask,
  updateTask,
  getTaskById,
  getTaskList,
  removeTaskById,
} from './controllers.js';

export const taskRestRoutes = () => {
  const router = Router();

  router.use(json());
  router.route('/tasks').get(getTaskList);
  router.route('/tasks').post(addAnotherTask);
  router.route('/tasks/:id').put(updateTask);
  router.route('/tasks/:id').get(getTaskById);
  router.route('/tasks/:id').delete(removeTaskById);

  return router;
};
