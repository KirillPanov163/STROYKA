import { Router } from 'express';
import { MetaDataController } from '../controllers/metaData.controller.js';
const metaDataRouter = Router();

metaDataRouter.get('/', async (req, res) => {
  await MetaDataController.getAllMetaData(req, res);
});

metaDataRouter.get('/:id', async (req, res) => {
  await MetaDataController.getOneMetaData(req, res);
});

metaDataRouter.put('/:id', async (req, res) => {
  await MetaDataController.updateMetaData(req, res);
});

export default metaDataRouter;
