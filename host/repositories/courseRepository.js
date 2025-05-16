import db from "../services/db.js";

// Lấy tất cả khoá học (có phân trang)
export const getAllCourses = async (offset = 0, limit = 8) => {
  const [rows] = await db.query("SELECT * FROM e_course LIMIT ? OFFSET ?", [
    limit,
    offset,
  ]);
  return rows;
};

// Lấy khoá học theo id
export const getCourseById = async (id) => {
  const [rows] = await db.query("SELECT * FROM e_course WHERE id = ?", [id]);
  return rows[0];
};

// Tạo mới khoá học
export const createCourse = async (course) => {
  const [result] = await db.query("INSERT INTO e_course SET ?", course);
  return { id: result.insertId, ...course };
};

// Cập nhật khoá học
export const updateCourse = async (id, course) => {
  await db.query("UPDATE e_course SET ? WHERE id = ?", [course, id]);
  return { id, ...course };
};

// Xoá khoá học
export const deleteCourse = async (id) => {
  await db.query("DELETE FROM e_course WHERE id = ?", [id]);
  return { id };
};

// Tìm kiếm khoá học theo tên
export const searchCourses = async (
  name,
  offset,
  limit
) => {
  offset = parseInt(offset) || 0;
  limit = parseInt(limit) || 10;
  const [rows] = await db.query(
    `
    SELECT 
      ec.id, 
      ec.topic_name, 
      ec.banner
    FROM 
      elearning.e_course ec 
    WHERE 
        (FALSE OR ( ? != '' AND ec.topic_name LIKE CONCAT('%', ?, '%')))
    ORDER BY
      ec.topic_name 
    LIMIT ? OFFSET ?
    `,
    [
      name || "",
      name || "",
      limit,
      offset,
    ]
  );
  return rows;
};
