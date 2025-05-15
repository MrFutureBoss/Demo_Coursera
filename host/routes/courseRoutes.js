import express from 'express';
import {
  getAllCoursesController,
  getCourseByIdController,
  createCourseController,
  updateCourseController,
  deleteCourseController
} from '../controllers/courseController.js';
const courseRouter = express.Router();

courseRouter.get('/', getAllCoursesController);
courseRouter.get('/:id', getCourseByIdController);
courseRouter.post('/', createCourseController);
courseRouter.put('/:id', updateCourseController);
courseRouter.delete('/:id', deleteCourseController);

export default courseRouter;
