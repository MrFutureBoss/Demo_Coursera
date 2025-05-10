import db from "../../services/db.js";

export const getCourse_QuizById = async (quizId) => {
    const [rows] = await db.query('SELECT * FROM e_course_quiz WHERE id = ?', [quizId]);
    return rows[0];
}

export const getQuizByQuizId = async (quizId) => {
    const [rows] = await db.query('SELECT * FROM e_quiz WHERE quiz_id = ?', [quizId]);
    return rows[0];
}

export const getQuizzesDetailByCourseQuizId = async (courseQuizId) => {
    const [rows] = await db.query('SELECT * FROM e_course_quiz WHERE id = ?', [courseQuizId]);
    if (!rows || !rows[0] || !rows[0].quizzes) return [];
    let quizzesArr = rows[0].quizzes;
    if (typeof quizzesArr === 'string') {
        try {
            quizzesArr = JSON.parse(quizzesArr);
        } catch {
            quizzesArr = quizzesArr.split(',').map(q => q.trim());
        }
    }
    if (!Array.isArray(quizzesArr)) return [];
    const quizDetails = await Promise.all(quizzesArr.map(qid => getQuizByQuizId(qid)));
    return quizDetails.filter(Boolean);
}
