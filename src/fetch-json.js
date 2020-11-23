import { requestJson } from './request-json';

export function fetchJson(...args) {

	var request = requestJson.apply(null, args);

	return fetch(request)
		.then(response => response.json()
			.then(data => ({
				data,
				response
			}))
		);
}
