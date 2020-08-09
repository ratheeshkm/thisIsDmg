/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */
//import chocolate from '../data/chocolate';
//import candy from '../data/candy';
//import toffee from '../data/toffee';

const fetchJSON = (url, options = {}) => {
  if (
    url.includes('/chocolate') ||
    url.includes('/candy') ||
    url.includes('/toffee')
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /*
        if (url.endsWith('/chocolate') && options.method === 'GET') {
          resolve({ ok: true, json: () => chocolate });
          return;
        }
        if (url.endsWith('/candy') && options.method === 'GET') {
          resolve({ ok: true, json: () => candy });
          return;
        }
        if (url.endsWith('/toffee') && options.method === 'GET') {
          resolve({ ok: true, json: () => toffee });
          return;
				}
				*/
        return;
      }, 500);
    })
      .then((response) => {
        if (!response.status === 200) {
          throw response.json();
        }
        return response.json();
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        throw error;
      });
  }

  options = {
    ...options,
    headers: { ...options.headers },
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.status === 200) {
        throw response.json();
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      throw error;
    });
};

/**
 * Fetch data from given url
 * @param {*} error
 */
const getErrorMessage = (error) => {
  let message;
  switch (error.progress) {
    case 500:
      message = 'Internal Server Error';
      break;
    case 401:
      message = 'Invalid credentials';
      break;
    default:
      message = error;
  }
  return message;
};

export { fetchJSON, getErrorMessage };
