let request = require('request');
let secret = require('./config').secret;
let url = require('./config').url;

let options = {
    method: 'GET',
    url: url,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${secret}`
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(
        'Response: ' + response.statusCode + ' ' + response.statusMessage
    );
    let results = JSON.parse(body);
    for(let i = 0; i < results.issues.length; i++) {
        let keys = results.issues[i].key;
        let status = results.issues[i].fields.status.name;
        console.log(status);
    }


});
