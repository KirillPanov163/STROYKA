import { Router, Request, Response } from 'express';
import formatResponse from '../utils/formatResponse.js';
import authRouter from './auth.route.js';
import recordingRouter from './recording.route.js';
import contactsRouter from './contacts.routes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/recording', recordingRouter)
router.use('/contacts', contactsRouter)

router.use((req: Request, res: Response) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

export default router;
