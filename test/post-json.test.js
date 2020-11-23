import { postJson } from '../src';
import fetch, { Headers } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;

const data = { val: 'https://www.google.co.uk' };

it('post has the correct data', () => {
	let options = postJson(data);

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.body).toBe('{"val":"https://www.google.co.uk"}');

	options = postJson(data, {
		body: 'helloworld',
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.body).not.toBe('helloworld');
	expect(options.body).toBe('{"val":"https://www.google.co.uk"}');
});

it('post has default headers', () => {
	let options = postJson(data);

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');

	options = postJson(data, {
		mode: 'cors',
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
	expect(options.mode).toBe('cors');
});

it('post has the correct headers', () => {
	let options = postJson(data, {
		headers: new Headers({
			'content-type': 'image/jpeg',
		}),
	});

	expect(options.headers).not.toBe(null);
	expect(options.headers.get('content-type')).toBe('application/json');
});
