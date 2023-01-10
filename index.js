function getRunningStatusFromText(text) {
  text = text.toLowerCase();
  // it's running
  if (text.includes('resumed') || text.includes('begun')) {
    return true;
  }
  // it's not
  else if (text.includes('condluded') || text.includes('out of service')) {
    return false;
  }

  // don't know, assume it is not
  return false;
}

function render(text, html) {
  const isRunning = getRunningStatusFromText(text);
  const status = document.getElementById('status');
  const tweet = document.getElementById('tweet');
  let msg = '';
  if (isRunning) {
    msg = `The ferry is running`;
  } else {
    msg = `The ferry is closed`;
  }

  status.innerHTML = `<h1>${msg}</h1>`;
  tweet.innerHTML = `<p>${html}</p>`;
}

fetch('https://canal-ferry-status.netlify.app/.netlify/functions/api')
  .then((response) => response.json())
  .then(({ tweet, oembed }) => {
    console.log(o);
    render(tweet.text, oembed.html);
  })
  .catch(console.log);
