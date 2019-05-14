var request = require('request');
var secret = require('./config').secret;
var url = require('./config').url;
var user = require('./config').user;

var bodyData = '{' + `
        jql: \'assignee = ${user} AND status != closed AND status != done AND project != MSSF\'`
    '}';

var options = {
    method: 'GET',
    url: url,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${secret}`
    },
    body: bodyData
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(
        'Response: ' + response.statusCode + ' ' + response.statusMessage
    );
    console.log(JSON.parse(body));
});
