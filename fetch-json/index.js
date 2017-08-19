import requestJson from '../request-json';

export default function fetchJson(...args) {

    var request = requestJson.apply(null, args);

    return fetch(request)
        .then(response => response.json()
            .then(data => ({
                data,
                response
            }))
        );
}
