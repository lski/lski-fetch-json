import { putJson } from '../src';
import fetch, { Headers } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;

const data = { val: 'https://www.google.co.uk' };

it('put has the correct data', () => {

	let options = putJson(data);

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.body).toBe('{"val":"https://www.google.co.uk"}');

	options = putJson(data, {
		body: 'helloworld'
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.body).not.toBe('helloworld');
	expect(options.body).toBe('{"val":"https://www.google.co.uk"}');
});

it('put has default headers', () => {

	let options = putJson(data);

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');

	options = putJson(data, {
		mode: 'cors'
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.mode).toBe('cors');
});

it('put has the correct headers', () => {

	let options = putJson(data, {
		headers: new Headers({
			'content-type': 'image/jpeg'
		})
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
});