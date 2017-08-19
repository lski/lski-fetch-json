import ensure from '../utils/ensure-header';

export default function requestJson(input, init = {}) {

    let options = Object.assign({}, init, {
        headers: ensure('accept', 'application/json, text/plain', init.headers)
    });

    return new Request(input, options);
}
