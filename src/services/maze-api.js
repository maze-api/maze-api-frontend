export function getMaze(options) {
  const url = 'https://maze-api.herokuapp.com/api/mazes';

  options.number = 1;
  const queryString = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return fetch(`${url}/?${queryString}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '5da8e374122c300017d3e097'
    }
  })
    .then(res => res.json());
}
