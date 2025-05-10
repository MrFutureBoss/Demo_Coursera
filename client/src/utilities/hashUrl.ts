const hashUrl = (url: string) => {
    return url.replace(/\s/g, '-');
}

export default hashUrl;