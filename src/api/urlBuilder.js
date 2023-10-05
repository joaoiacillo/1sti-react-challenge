export default function buildUrl(url, props) {
    const keys = Object.keys(props);
    let newUrl = url;
    keys.forEach((key) => newUrl = newUrl.replace(`%${key}`, props[key]));
    return newUrl;
};
