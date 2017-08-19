import requestJson from '../request-json';
import fetch, { Headers, Request } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;

it('request as correct accept type', () => {

    let request = requestJson('http://www.google.com');

    expect(request.headers).not.toBeNull();
    expect(request.headers.get('accept')).toBe('application/json, text/plain');
});

it('request overrides the correct accept type', () => {

    let request = requestJson('http://www.google.com', {  
        headers: new Headers({
            'accept': 'image/jpeg'
        })
    });

    expect(request.headers).not.toBeNull();
    expect(request.headers.get('accept')).toBe('application/json, text/plain');
});