import { Router, Request, Response } from 'express';
import formatResponse from '../utils/formatResponse.js';
import authRouter from './auth.route.js';
import recordingRouter from './recording.route.js';
import metaDataRouter from './metaData.route.js';
import serviceRouter from './service.route.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/recording', recordingRouter);
router.use('/metadata', metaDataRouter);
router.use('/service', serviceRouter);

router.use((req: Request, res: Response) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

export default router;
