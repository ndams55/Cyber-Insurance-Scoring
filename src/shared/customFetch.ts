export const customFetch = {
  get: (url: string) => {
    return fetch(url).then((res) => res.json());
  },

  post: (url: string, data: unknown) => {
    return fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },

  put: (url: string, data: unknown) => {
    return fetch(url, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },

  delete: (url: string) => {
    return fetch(url, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  },
};
