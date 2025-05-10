import express from 'express';
import { getSectionBySectionIdController } from '../../controllers/learn/takeSectionController.js';

const takeSectionRouter = express.Router();

takeSectionRouter.get('/:id', getSectionBySectionIdController);

export default takeSectionRouter;

