import express from 'express';
import {
  getClassesAndCourseForParticipantController
} from '../controllers/classController.js';
import { verifyAccessToken, verifyRole } from '../middlewares/authentication.js';
const classRouter = express.Router();

classRouter.get('/:userId/', 
    verifyAccessToken,
    verifyRole(['member']), getClassesAndCourseForParticipantController);

export default classRouter;
