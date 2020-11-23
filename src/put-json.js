import { ensureHeader } from './utils/ensure-header';

export function putJson(data, options = {}) {

	const result = Object.assign({}, options, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: ensureHeader('Content-Type', 'application/json', options.headers)
	});

	return result;
}
