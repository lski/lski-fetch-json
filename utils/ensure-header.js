export default function ensureHeader(name, value, headers) {

    if (!name || typeof name !== 'string') {
        throw new TypeError('The header name should not be empty/null');
    }

    if (!value) {
        throw new TypeError('The header value should not be empty/null');
    }

    const result = headers == null ? new Headers() : new Headers(headers);

    result.set(name, value);

    return result;
}