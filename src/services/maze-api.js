export function getMaze(options) {
  const url = 'https://maze-api.herokuapp.com/api/mazes';

  options.number = 1;
  const queryString = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return fetch(`${url}/?${queryString}`)
    .then(res => res.json());
}
