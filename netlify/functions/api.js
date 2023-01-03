const twitter = require('twitter-api-sdk');

exports.handler = async (event, context) => {
  let response;
  const client = new twitter.Client(process.env.TOKEN);
  try {
    response = await client.tweets.usersIdTweets('43169410');
    // handle response
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
