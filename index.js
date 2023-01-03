const isRunning = (text) => {
  text = text.toLowerCase();
  // it's running
  if (text.includes('resumed') || text.includes('begun')) {
    return true;

    // it's not
  } else if (text.includes('condluded') || text.includes('out of service')) {
    return false;
  }

  // don't know, assume it is not
  return false;
};

const render = (text) => {
  const isRunning = isRunning(text);
  const status = document.getElementById('status');
  const tweet = document.getElementById('tweet');
  let msg = '';
  if (isRunning) {
    msg = `The ferry is running`;
  } else {
    msg = `The ferry is closed`;
  }

  status.innerHTML = `<h1>${msg}</h1>`;
  tweet.innerHTML = `<p>${text}</p>`;
};

fetch('https://canal-ferry-status.netlify.app/.netlify/functions/api')
  .then((response) => response.json())
  .then((response) => {
    const tweets = response.data.data;
    const latestTweet = tweets[0].text;
    render(latestTweet);
  })
  .catch(console.log);
