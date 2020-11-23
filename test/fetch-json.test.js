import { fetchJson, postJson } from '../src';
import fetch, { Headers, Request } from 'node-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;

it('gets data', () => {

	const prom = fetchJson('https://api-echo.azurewebsites.net/echo', postJson({ a: 'helloworld' }));

	prom
		.then((response) => {
			expect(response.data).not.toBeNull();
			expect(response.data.a).toBe('helloworld');
		})
		.catch((err) => {
			expect(err).toBeNull();
		});

	expect(prom).not.toBeNull();

	return prom;
});
