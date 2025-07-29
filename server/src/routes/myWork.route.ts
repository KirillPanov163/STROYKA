import { Router } from 'express';
import { MyWorkController } from '../controllers/MyWork.controller.js';
import { upload } from '../services/upload.service.js';

const myWorkRouter = Router();

myWorkRouter.post('/', upload.single('image'), MyWorkController.createMyWork);
myWorkRouter.get('/', MyWorkController.getAllMyWorks);
myWorkRouter.get('/:id', MyWorkController.getMyWorkById);
myWorkRouter.put('/:id', upload.single('image'), MyWorkController.updateMyWork);
myWorkRouter.delete('/:id', MyWorkController.deleteMyWork);

export default myWorkRouter;