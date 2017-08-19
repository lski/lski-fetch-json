lski-fetch-json
===============

This library provides a few functions that wrap parts of the fetch API to default headers and the data to sending and/or receiving JSON, rather than having to write it each time.

This library is all about convenience, easy of use and flexibility, you can choose whether you just want to send, or just want to receive JSON or in fact both in the same call.

This library does not modify the fetch API and it uses pure functions.

### Example - Get JSON

```js
import fetchJson, { postJson } from 'lski-fetch-json';

fetchJson('http://an-api.com')
    .then(({ data, response }) => {
        console.log(data, response); 
        // data: a JSON object not a string
        // response: the original fetch response object
    });

```

The fetchJson function only deals with getting JSON, it does not care if you are sending JSON, you can send any data type you want and can accept options (or a Request object) the same as standard fetch. The only difference between fetch and fetchJson is the parameter to the first 'then' is an object that includes two properties 'data' that is the JSON data returned and 'response' which is the original raw response given to fetch.

### Example - Send JSON

```js
const myData = { hello: "world" };

fetch('http://an-api.com', postJson(myData))
    .then(response => {
        // A normal fetch response object
    });
```

The postJson (and putJson) function deals purely with sending a JSON object directly to the url. It does not care if you are receiving JSON back, just that you are sending it, so can be used with the standard fetch function. Therefore it handles the conversion to a JSON string and setting the appropriate headers. 

### Example - Send and Get JSON

```js
fetchJson('http://an-api.com', postJson(myData))
    .then(({ data, response }) => {
        console.log(data, response); 
    });
```

### Example - Request

```js
import fetchJson from 'lski-fetch-json';

const request = new Request('http://an-api.com', postJson({ hello: "world" }));

fetchJson(request)
    .then(({ data, response }) => {
        console.log(data, response); 
    });
```

If you prefer to use and reuse a Request object fetchJson works in the same way as fetch, just with the

## Install

npm i lski-fetch-json

### Test

npm i
npm test

## Prerequisites

There are only two things needed for this to work, fetch and Object.assign. Both of which are easily polyfilled in needed.

