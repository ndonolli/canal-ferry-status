const twitter = require('twitter-api-sdk');
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  let latestTweet;
  let oembedResponse;
  const client = new twitter.Client(process.env.TOKEN);
  try {
    const tweetResponse = await client.tweets.usersIdTweets('43169410');
    const tweets = tweetResponse.data;
    latestTweet = tweets[0];
    const publishUrl = `https://publish.twitter.com/oembed?url=https://twitter.com/Canal_Ferry/status/${latestTweet.id}`;
    const publishResponse = await fetch(publishUrl);
    oembedResponse = await publishResponse.json();
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
      tweet: latestTweet,
      oembed: oembedResponse,
    }),
  };
};
