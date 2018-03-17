import ensure from '../utils/ensure-header';

export default function putJson(data, options = {}) {

	const result = Object.assign({}, options, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: ensure('Content-Type', 'application/json', options.headers)
	});

	return result;
}
