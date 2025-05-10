import { getSectionBySectionId } from "../../repositories/learn/takeSectionDAO.js";

export const getSectionBySectionIdController = async (req, res) => {
    try {
        const sectionId = req.params.id;
        const section = await getSectionBySectionId(sectionId);
        if (!section) {
            return res.status(404).json({ message: 'Section not found' });
        }
        res.json({
            message: 'Fetched section successfully',
            data: section,
            count: Array.isArray(section) ? section.length : 0
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }    
}
