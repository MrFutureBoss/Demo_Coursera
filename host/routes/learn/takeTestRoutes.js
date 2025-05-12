import express from 'express';
import { getTestByTestIdController } from '../../controllers/learn/takeTestController.js';
import { getTestInforController } from '../../controllers/learn/takeTestController.js';

const takeTestRouter = express.Router();

takeTestRouter.get('/:id', getTestByTestIdController);
takeTestRouter.get('/:id/infor', getTestInforController);

export default takeTestRouter;

