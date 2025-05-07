import express from 'express';
import {
  getAllLessonsController,
  getLessonByIdController,
  getLessonsByCourseIdController,
  createLessonController,
  updateLessonController,
  deleteLessonController,
  getAllSectionByLessonIdController
} from '../controllers/lessonController.js';

const lessonRouter = express.Router();

lessonRouter.get('/', getAllLessonsController);
lessonRouter.get('/:id', getLessonByIdController);
lessonRouter.get('/:courseId/course', getLessonsByCourseIdController);
lessonRouter.get('/:lessonId/sections', getAllSectionByLessonIdController);
lessonRouter.post('/', createLessonController);
lessonRouter.put('/:id', updateLessonController);
lessonRouter.delete('/:id', deleteLessonController);

export default lessonRouter;
