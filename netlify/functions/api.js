const fetch = require('node-fetch');
const twitter = require('twitter-api-sdk');

const API_ENDPOINT = 'https://api.twitter.com/2/users/43169410/tweets';

// exports.handler = async (event, context) => {
//   let response;
//   const client = new twitter.Client(process.env.BEARER_TOKEN);
//   try {
//     const response = await client.tweets.usersIdTweets('43169410');
//     // handle response
//   } catch (err) {
//     return {
//       statusCode: err.statusCode || 500,
//       body: JSON.stringify({
//         error: err.message,
//       }),
//     };
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       data: response,
//     }),
//   };
// };

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
