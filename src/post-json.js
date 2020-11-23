import { ensureHeader } from './utils/ensure-header';

export function postJson(data, options = {}) {
	const result = Object.assign({}, options, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: ensureHeader('Content-Type', 'application/json', options.headers),
	});

	return result;
}
