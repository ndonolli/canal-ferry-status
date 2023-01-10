const twitter = require('twitter-api-sdk');
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  let response;
  const client = new twitter.Client(process.env.TOKEN);
  try {
    const tweetResponse = await client.tweets.usersIdTweets('43169410');
    const tweets = tweetResponse.data;
    const latestTweet = tweets[0];
    const publishUrl = `https://publish.twitter.com/oembed?url=https://twitter.com/Canal_Ferry/status/${latestTweet.id}`;
    const publishResponse = await fetch(publishUrl);
    response = await publishResponse.json();
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
