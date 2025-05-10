import db from "../../services/db.js";

export const getSectionBySectionId = async (sectionId) => {
    const [rows] = await db.query('SELECT * FROM e_lesson_section WHERE id = ?', [sectionId]);
    return rows[0];
}