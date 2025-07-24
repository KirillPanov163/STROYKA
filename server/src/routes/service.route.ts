import { Router } from 'express';
import { ServiceController } from '../controllers/service.controller.js';
const serviceRouter = Router();

serviceRouter.get('/', async (req, res) => {
  await ServiceController.getAllServices(req, res);
});

serviceRouter.get('/:id', async (req, res) => {
  await ServiceController.getOneService(req, res);
});

serviceRouter.post('/', async (req, res) => {
  await ServiceController.createService(req, res);
});

serviceRouter.put('/:id', async (req, res) => {
  await ServiceController.updateService(req, res);
});

serviceRouter.delete('/:id', async (req, res) => {
  await ServiceController.deleteService(req, res);
});

export default serviceRouter