export function getMazes(options, key) {
  let url = 'https://maze-api.herokuapp.com/api/mazes';
  options.number = 1;
  const queryString = Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&');
  return fetch(`${url}/?${queryString}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': key
    }
  })
    .then(res => res.json());
}
