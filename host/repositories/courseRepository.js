import db from '../services/db.js';

// Lấy tất cả khoá học
export const getAllCourses = async () => {
  const [rows] = await db.query('SELECT * FROM e_course');
  return rows;
};

// Lấy khoá học theo id
export const getCourseById = async (id) => {
  const [rows] = await db.query('SELECT * FROM e_course WHERE id = ?', [id]);
  return rows[0];
};

// Tạo mới khoá học
export const createCourse = async (course) => {
  const [result] = await db.query('INSERT INTO e_course SET ?', course);
  return { id: result.insertId, ...course };
};

// Cập nhật khoá học
export const updateCourse = async (id, course) => {
  await db.query('UPDATE e_course SET ? WHERE id = ?', [course, id]);
  return { id, ...course };
};

// Xoá khoá học
export const deleteCourse = async (id) => {
  await db.query('DELETE FROM e_course WHERE id = ?', [id]);
  return { id };
};
