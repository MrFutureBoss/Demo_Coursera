export const getIdFromURL = (url: string): string => {
    const lastDash = url.lastIndexOf('-');
    return url.slice(lastDash + 1);
}