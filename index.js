// Write Javascript code!
const render = (text) => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<p>${text}</p>`;
};

// test
fetch('https://canal-ferry-status.netlify.app/.netlify/functions/api')
  .then((response) => response.json())
  .then((response) => {
    const tweets = response.data.data;
    const latestTweet = tweets[0];
    render(latestTweet);
  })
  .catch(console.log);
