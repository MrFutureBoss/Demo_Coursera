import { getClassesAndCourseForParticipant } from "../repositories/classDAO.js";
export const getClassesAndCourseForParticipantController = async (req, res) => {
  const userId = req.params.userId;
  const filter = req.query.filter;
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 8;
  try {
    const classes = await getClassesAndCourseForParticipant(
      userId,
      filter,
      offset,
      limit
    );
    res.status(200).json({ classes: classes, count: classes.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
