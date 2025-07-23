import { Router } from 'express';
import { MyWorkController } from '../controllers/MyWork.controller.js';

const myWorkRouter = Router();

myWorkRouter.post('/', async (req, res) => {
  await MyWorkController.createMyWork(req, res);
});

myWorkRouter.get('/', async (req, res) => {
  await MyWorkController.getAllMyWorks(req, res);
});

myWorkRouter.get('/:id', async (req, res) => {
  await MyWorkController.getMyWorkById(req, res);
});

myWorkRouter.put('/:id', async (req, res) => {
  await MyWorkController.updateMyWork(req, res);
});

myWorkRouter.delete('/:id', async (req, res) => {
  await MyWorkController.deleteMyWork(req, res);
});

export default myWorkRouter;
