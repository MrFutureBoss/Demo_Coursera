import express from 'express';
import {
  getAllLessonsController,
  getLessonByIdController,
  getLessonsByCourseIdController,
  createLessonController,
  updateLessonController,
  deleteLessonController
} from '../controllers/lessonController.js';

const lessonRouter = express.Router();

lessonRouter.get('/', getAllLessonsController);
lessonRouter.get('/:id', getLessonByIdController);
lessonRouter.get('/course/:courseId', getLessonsByCourseIdController);
lessonRouter.post('/', createLessonController);
lessonRouter.put('/:id', updateLessonController);
lessonRouter.delete('/:id', deleteLessonController);

export default lessonRouter;
