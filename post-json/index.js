import ensure from '../utils/ensure-header';

export default function postJson(data, options = {}) {

	const result = Object.assign({}, options, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: ensure('Content-Type', 'application/json', options.headers)
	});

	return result;
}
