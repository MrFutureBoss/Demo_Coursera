import {
  getAllLessons,
  getLessonById,
  getLessonsByCourseId,
  createLesson,
  updateLesson,
  deleteLesson,
  getAllSectionAndQuizByLessonId,
} from "../repositories/lessonRepository.js";

/**
 * Lấy tất cả section và quiz theo lesson_id
 */
export const getAllSectionAndQuizByLessonIdController = async (req, res) => {
  try {
    const sections = await getAllSectionAndQuizByLessonId(req.params.lessonId);
    res.json({
      message: "Fetched lesson sections successfully",
      data: sections,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Lấy danh sách tất cả bài học
 */
export const getAllLessonsController = async (req, res) => {
  try {
    const lessons = await getAllLessons();
    res.json({
      message: "Fetched lesson list successfully",
      data: lessons,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Lấy bài học theo id
 */
export const getLessonByIdController = async (req, res) => {
  try {
    const lesson = await getLessonById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }
    res.json({
      message: "Fetched lesson successfully",
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Lấy danh sách bài học theo course_id
 */
export const getLessonsByCourseIdController = async (req, res) => {
  try {
    const lessons = await getLessonsByCourseId(req.params.courseId);
    res.json({
      message: "Fetched lessons by course id successfully",
      data: lessons,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Tạo mới bài học
 */
export const createLessonController = async (req, res) => {
  try {
    const lesson = await createLesson(req.body);
    res.status(201).json({
      message: "Lesson created successfully",
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Cập nhật bài học
 */
export const updateLessonController = async (req, res) => {
  try {
    const lesson = await updateLesson(req.params.id, req.body);
    res.json({
      message: "Lesson updated successfully",
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Xóa bài học
 */
export const deleteLessonController = async (req, res) => {
  try {
    await deleteLesson(req.params.id);
    res.json({
      message: "Lesson deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Lấy thông tin một khoá học theo ID
 */
export const getCourseByIdController = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course)
      return res
        .status(404)
        .json({ message: "Course not found", data: null, count: 0 });
    res.json({
      message: "Fetched course successfully",
      data: course,
      count: course ? 1 : 0,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to fetch course",
        error: err.message,
        data: null,
        count: 0,
      });
  }
};

/**
 * Tạo mới một khoá học
 */
export const createCourseController = async (req, res) => {
  try {
    const newCourse = await createCourse(req.body);
    res.status(201).json({
      message: "Course created successfully",
      data: newCourse,
      count: 1,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to create course",
        error: err.message,
        data: null,
        count: 0,
      });
  }
};

/**
 * Cập nhật thông tin một khoá học theo ID
 */
export const updateCourseController = async (req, res) => {
  try {
    const updated = await updateCourse(req.params.id, req.body);
    res.json({
      message: "Course updated successfully",
      data: updated,
      count: updated ? 1 : 0,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to update course",
        error: err.message,
        data: null,
        count: 0,
      });
  }
};

/**
 * Xoá một khoá học theo ID
 */
export const deleteCourseController = async (req, res) => {
  try {
    const deleted = await deleteCourse(req.params.id);
    res.json({
      message: "Course deleted successfully",
      data: deleted,
      count: deleted ? 1 : 0,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to delete course",
        error: err.message,
        data: null,
        count: 0,
      });
  }
};
