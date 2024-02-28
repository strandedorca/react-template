// Basic usage of axios
import axios from 'axios';

// A simple GET request
axios.get('')
    .then((response) => {
        // Handle success
        console.log(response);
    })
    .catch((error) => {
        // Handle error
        console.log(error.code, error.message);
    })
    .finally(() => {
        // Always executed
        console.log('All tasks are done');
    })

// Async/await syntax
const getData = async () => {
    try {
        const response = await axios.get('');
        console.log(response);
    } catch (error) { 
        console.log(error);
    } finally {
        console.log('All tasks are done');
    }
}

// ------------------------------------------------------------
// POST request
axios.post('', {
    firstName: 'Noah',
    lastName: 'Raymond',
})
    .then((response) => {
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })

// --------------------------------------------------------------
// Multiple request
function getA() {
    return axios.get('');
}
function getB() {
    return axios.get('');
}

const [a, b] = await Promise.all([getA(), getB()]);
// OR
Promise.all([getA(), getB()])
    .then(([a, b]) => {
        console.log(a, b);
    })

// -----------------------------------------------------------------
// Post an HTML form as JSON - this is the form element not the form data
// const myForm = document.querySelector('#my-form');
// const {data} = await axios.post('', myForm, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// Multipart - form that has binary data (files)
// const { data } = await axios.post('', {
//     firstName: 'Noah',
//     lastName: 'Subedar',
//     orders: [1, 2, 3],
//     photo: document.querySelector<HTMLInputElement>('#fileInput')?.files
// }, {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// })

// URL encoded form
const { data } = await axios.post('', {
    firstName: 'Kira',
    lastName: 'Yan',
    order: [1, 2, 3]
}, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// Config
// Config option: https://axios-http.com/docs/req_config
const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    validateStatus: (status: any) => {
        return status < 500; // Resolve only if status code < 500
    }
}

axios.get('/endpoint', config)
    .then((response) => { console.log(response) })
    .catch((error) => { console.log(error) });

// Default config - to all request
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// -----------------------------------------------------------------
// Response Schema
const responseSchema = {
    data: {}, // response from server
    status: 200,
    statusText: 'OK',
    headers: {}, // from the server
    config: {}, // provided to 'axios' for the request
    request: {}
}

// -------------------------------------------------------------------
// Interceptors - applied globally
// Request Interceptors
axios.interceptors.request.use(
    (config) => {
        // Do something before sending the request
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error); // Create a new promise that is immediately rejected with this error.
    }
);

// Response interceptors
axios.interceptors.response.use(
    (response) => {
        // Reponse with 2xx status triggers this
        return response;
    },
    (error) => {
        // Responses that are not 2xx trigger this
        return Promise.reject(error);
    }
);

// -------------------------------------------------------------------
// Handling Errors
axios.get('')
    .catch((error) => {
        // Response exists -> Request was made and server responded with a status code that falls out of 2xx
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        // No response - request is an instance of XMLHttpRequest
        } else if (error.request) {
            console.log(error.request);
        // Other console.error();
        
        } else {
            console.log('Error', error.message);
            console.log(error.toJSON());
        }
        console.log(error.config);
    });

// --------------------------------------------------------------------
// Cancelling requests
// Without cancallation, an axios call can hand until the parent stack times out. It might be beneficial to cancel the connection early
// Using `signal` & `timeout`
// AbortSignal is a Web API
const controller = new AbortController();

axios.get('', {
    signal: controller.signal
}).then((response) => {
    // ...
})

// Cancel the request manually
controller.abort();

// Cancel the request with a timeout
axios.get('', {
    signal: AbortSignal.timeout(5000)
}).then((response) => {});

// -------------------------------------------------------------------
// URL-Encoding Bodies
// By default, axios serializes JS objects to JSON. To send in URL encoded format instead:
await axios.post('https://postman-echo.com/post', data,
  {
    headers: { 
        'content-type': 'application/x-www-form-urlencoded'
    }
  }
);