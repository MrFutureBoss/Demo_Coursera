import db from '../services/db.js';

// Lấy tất cả bài học
export const getAllLessons = async () => {
  const [rows] = await db.query('SELECT * FROM e_lesson');
  return rows;
};

// Lấy bài học theo id
export const getLessonById = async (id) => {
  const [rows] = await db.query('SELECT * FROM e_lesson WHERE id = ?', [id]);
  return rows[0];
};

// Lấy bài học theo course_id
export const getLessonsByCourseId = async (courseId) => {
  const [rows] = await db.query('SELECT * FROM e_lesson WHERE course_id = ?', [courseId]);
  return rows;
};

// Tạo mới bài học
export const createLesson = async (lesson) => {
  const { course_id, name, updated_at, updated_by } = lesson;
  const [result] = await db.query(
    'INSERT INTO e_lesson (course_id, name, updated_at, updated_by) VALUES (?, ?, ?, ?)',
    [course_id, name, updated_at, updated_by]
  );
  return { id: result.insertId, ...lesson };
};

// Cập nhật bài học
export const updateLesson = async (id, lesson) => {
  const { course_id, name, updated_at, updated_by } = lesson;
  await db.query(
    'UPDATE e_lesson SET course_id=?, name=?, updated_at=?, updated_by=? WHERE id=?',
    [course_id, name, updated_at, updated_by, id]
  );
  return { id, ...lesson };
};

// Lấy tất cả section theo lesson_id
export const getAllSectionByLessonId = async (lessonId) => {
  const [rows] = await db.query('SELECT * FROM e_lesson_section WHERE lesson_id = ?', [lessonId]);
  return rows;
};

// Xóa bài học
export const deleteLesson = async (id) => {
  await db.query('DELETE FROM e_lesson WHERE id=?', [id]);
  return true;
};
