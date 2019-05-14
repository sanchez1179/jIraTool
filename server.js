var request = require('request');
var secret = require('./config').secret;

var bodyData = '{' +
    '    jql: \'assignee = isanchez AND status != closed AND status != done AND project != MSSF\'' +
    '}';

var options = {
    method: 'GET',
    url: 'https://masterstream.atlassian.net/rest/api/3/filter',
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
