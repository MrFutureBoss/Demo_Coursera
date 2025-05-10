import { getQuizzesDetailByCourseQuizId } from "../../repositories/learn/takeTestDAO.js";

export const getTestByTestIdController = async (req, res) => {
    try {
        const testId = req.params.id;
        const test = await getQuizzesDetailByCourseQuizId(testId);
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.json({
            message: 'Fetched test successfully',
            data: test,
            count: Array.isArray(test) ? test.length : 0
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }    
}
