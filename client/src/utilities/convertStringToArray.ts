const convertStringToArray = (str: string): string[] => {
    if (!str || str === '""' || str === '[]') return [];
    try {
        // Try parsing as JSON array
        const arr = JSON.parse(str);
        if (Array.isArray(arr)) {
            return arr.map(item => String(item));
        }
    } catch {
        // Fallback: comma split
        return str.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
};
export default convertStringToArray;
