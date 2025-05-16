// Chuyển đổi URL-encoded string thành hyphenated string 
//Ví dụ: "Hello%20World!" -> "hello-world"


export const urlToHyphenated = (urlEncodedString: string): string => {
    // First, decode the URL-encoded string
    const decodedString = decodeURIComponent(urlEncodedString);
    
    // Replace spaces and special characters with hyphens
    const hyphenatedString = decodedString
        .toLowerCase() // Convert to lowercase if desired
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
    
    return hyphenatedString;
}