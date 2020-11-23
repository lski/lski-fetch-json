import { ensureHeader } from './utils/ensure-header';

export function requestJson(input, init = {}) {

	let options = Object.assign({}, init, {
		headers: ensureHeader('accept', 'application/json, text/plain', init.headers)
	});

	return new Request(input, options);
}
