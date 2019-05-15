var request = require('request');
var secret = require('./config').secret;
var url = require('./config').url;

var options = {
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

    var results = JSON.parse(body);
    for(var i = 0; i < results.issues.length; i++) {
        var keys = results.issues[i].key;
        var status = results.issues[i].fields.status.name;
        console.log(status);
    }


});
