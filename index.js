// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// test
fetch('https://canal-ferry-status.netlify.app/.netlify/functions/api')
  .then(console.log)
  .catch(console.log);
