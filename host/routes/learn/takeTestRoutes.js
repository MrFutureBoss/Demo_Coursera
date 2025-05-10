import express from 'express';
import { getTestByTestIdController } from '../../controllers/learn/takeTestController.js';

const takeTestRouter = express.Router();

takeTestRouter.get('/:id', getTestByTestIdController);

export default takeTestRouter;

