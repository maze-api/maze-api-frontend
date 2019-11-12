const fetchMaze = (options) => {

  let url = 'https://maze-api.herokuapp.com/api/mazes';

  const optionEntries = Object.entries(options);

  if(optionEntries) {
    url += '?';
    optionEntries.forEach(entry => {
      url += `${entry[0]}=${entry[1]}&`;
    });

    url = url.slice(0, url.length - 1);

  }

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '5da8e374122c300017d3e097'
    }
  })
    .then(res => {
      return res.json();

    });
};

export default fetchMaze;
