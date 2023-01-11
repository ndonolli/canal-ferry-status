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
  const statusContainer = document.getElementById('status-container');
  const statusTextElem = document.getElementById('status-text');
  const tweet = document.getElementById('tweet');

  statusContainer.classList.remove('closed');
  statusContainer.classList.remove('running');

  let statusText = '';
  if (isRunning) {
    statusText = `RUNNING`;
  } else {
    statusText = `CLOSED`;
  }

  statusContainer.classList.add(statusText.toLowerCase());
  statusTextElem.innerText = statusText;

  tweet.innerHTML = `<p>${html}</p>`;
  twttr.widgets.load(document.body);
}

fetch('https://canal-ferry-status.netlify.app/.netlify/functions/api')
  .then((response) => response.json())
  .then(({ tweet, oembed }) => {
    render(tweet.text, oembed.html);
  })
  .catch(console.log);

window.addEventListener('beforeinstallprompt', (e) => {
  e.prompt();
  e.userChoice.then((choice) => {
    if (choice.outcome === 'accepted') {
      console.log('Thank you!');
    }
  });
});
