import express from 'express';
import {
  getAllCoursesController,
  getCourseByIdController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
  searchCoursesController
} from '../controllers/courseController.js';
import { verifyAccessToken } from '../middlewares/authentication.js';

const courseRouter = express.Router();

courseRouter.get('/', getAllCoursesController);
courseRouter.get('/search', verifyAccessToken, searchCoursesController);
courseRouter.get('/:id', getCourseByIdController);
courseRouter.post('/', createCourseController);
courseRouter.put('/:id', updateCourseController);
courseRouter.delete('/:id', deleteCourseController);

export default courseRouter;
