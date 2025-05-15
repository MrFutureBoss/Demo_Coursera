import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '../repositories/courseRepository.js';

export const getAllCoursesController = async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 8;
    const courses = await getAllCourses(offset, limit);
    res.json({
      message: 'Fetched course list successfully',
      data: courses,
      count: Array.isArray(courses) ? courses.length : 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch course list', error: err.message, data: null, count: 0 });
  }
};

/**
 * Lấy thông tin một khoá học theo ID
 */
export const getCourseByIdController = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found', data: null, count: 0 });
    res.json({
      message: 'Fetched course successfully',
      data: course,
      count: course ? 1 : 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch course', error: err.message, data: null, count: 0 });
  }
};

/**
 * Tạo mới một khoá học
 */
export const createCourseController = async (req, res) => {
  try {
    const newCourse = await createCourse(req.body);
    res.status(201).json({
      message: 'Course created successfully',
      data: newCourse,
      count: 1
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create course', error: err.message, data: null, count: 0 });
  }
};

/**
 * Cập nhật thông tin một khoá học theo ID
 */
export const updateCourseController = async (req, res) => {
  try {
    const updated = await updateCourse(req.params.id, req.body);
    res.json({
      message: 'Course updated successfully',
      data: updated,
      count: updated ? 1 : 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update course', error: err.message, data: null, count: 0 });
  }
};

/**
 * Xoá một khoá học theo ID
 */
export const deleteCourseController = async (req, res) => {
  try {
    const deleted = await deleteCourse(req.params.id);
    res.json({
      message: 'Course deleted successfully',
      data: deleted,
      count: deleted ? 1 : 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete course', error: err.message, data: null, count: 0 });
  }
};
