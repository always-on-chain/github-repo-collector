const request = require('request');
const config = require('../config.js');
const database = require('../database/index.js');

let getReposByUsername = (user) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  let options = {
    url: 'https://api.github.com/users/' + user + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(error, response, body) {
    console.log('error', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    database.save(JSON.parse(body));
    // database.get(JSON.parse(body));
  })

}

module.exports.getReposByUsername = getReposByUsername;