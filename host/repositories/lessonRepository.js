import db from "../services/db.js";

// Lấy tất cả bài học
export const getAllLessons = async () => {
  const [rows] = await db.query("SELECT * FROM e_lesson");
  return rows;
};

// Lấy bài học theo id
export const getLessonById = async (id) => {
  const [rows] = await db.query("SELECT * FROM e_lesson WHERE id = ?", [id]);
  return rows[0];
};

// Lấy bài học theo course_id
export const getLessonsByCourseId = async (courseId) => {
  const [rows] = await db.query("SELECT * FROM e_lesson WHERE course_id = ?", [
    courseId,
  ]);
  return rows;
};

// Tạo mới bài học
export const createLesson = async (lesson) => {
  const { course_id, name, updated_at, updated_by } = lesson;
  const [result] = await db.query(
    "INSERT INTO e_lesson (course_id, name, updated_at, updated_by) VALUES (?, ?, ?, ?)",
    [course_id, name, updated_at, updated_by]
  );
  return { id: result.insertId, ...lesson };
};

// Cập nhật bài học
export const updateLesson = async (id, lesson) => {
  const { course_id, name, updated_at, updated_by } = lesson;
  await db.query(
    "UPDATE e_lesson SET course_id=?, name=?, updated_at=?, updated_by=? WHERE id=?",
    [course_id, name, updated_at, updated_by, id]
  );
  return { id, ...lesson };
};

// Lấy tất cả section và quiz theo lesson_id
export const getAllSectionAndQuizByLessonId = async (lessonId) => {
  const [rows] = await db.query(
    `SELECT 
    el.id AS lesson_id,
    el.course_id,
    child_data.id AS material_id_ByType,
    child_data.name,
    child_data.detail,
    child_data.type,
    child_data.time
FROM 
    elearning.e_lesson el
JOIN (
    SELECT 
        lesson_id,
        id,
        name,
        detail,
        type,
        time
    FROM 
        elearning.e_lesson_section
    
    UNION ALL
    
    -- Lấy dữ liệu từ quizzes
    SELECT 
        lesson_id,
        id,
        name,
        detail,
        type,
        time
    FROM 
        elearning.e_course_quiz
) AS child_data ON child_data.lesson_id = el.id
    WHERE el.id = ?
ORDER BY 
    el.id;`,
    [lessonId]
  );
  return rows;
};

// Xóa bài học
export const deleteLesson = async (id) => {
  await db.query("DELETE FROM e_lesson WHERE id=?", [id]);
  return true;
};
