import ensure from '../utils/ensure-header';
import fetch, { Headers } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;

const initHeaders = {  
    'accept': 'application/json',
    'content-type': 'application/json'
};

it('ensure header is set', () => {

    const contentType = 'content-type';
    const contentTypeValue = 'image/jpeg';

    let headersA = new Headers(initHeaders);
    let headersB = new Headers();
    let headersC;

    expect(ensure(contentType, contentTypeValue, headersA).get(contentType)).toBe(contentTypeValue);
    expect(ensure(contentType, contentTypeValue, headersB).get(contentType)).toBe(contentTypeValue);
    expect(ensure(contentType, contentTypeValue, headersC).get(contentType)).toBe(contentTypeValue);
});

it('ensure headers are not modified', () => {

    let headersA = new Headers(initHeaders);
    let headersB = ensure('content-type', 'application/xml', headersA);

    expect(headersA == headersB).toBe(false);
    expect(headersA.get('content-type')).toBe('application/json');
    expect(headersB.get('content-type')).toBe('application/xml');
});