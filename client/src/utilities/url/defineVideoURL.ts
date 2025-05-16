export const defineVideoURL = (url: string): string | null => {
  if (url.includes("https://www.youtube.com")) {
    return "youtube";
  } else if (
    url.endsWith("mp4") ||
    url.endsWith("webm") ||
    url.endsWith("ogg") ||
    url.endsWith("mov") ||
    url.endsWith("flv") ||
    url.endsWith("wmv") ||
    url.endsWith("avi") ||
    url.endsWith("mkv")
  ) {
    return "video";
  } else {
    return null;
  }
};
