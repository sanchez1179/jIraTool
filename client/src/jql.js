

let request = require('request');
let secret = require('./config').secret;
let url = require('./config').url;


    export const getBugs(newDate)
{
    console.log(newDate);
}

        let options = {
            method: 'GET',
            url: `https://masterstream.atlassian.net/rest/api/2/search?jql=issuetype%20in%20("App%20Error"%2C%20"Hot%20Fix")%20AND%20created%20>%3D%20${dateBegin}%20AND%20created%20<%20${dateEnd}%20AND%20(resolution%20not%20in%20("Task%20cancelled"%2C%20"Cannot%20Reproduce"%2C%20"No%20Fix%20is%20Required")%20OR%20resolution%20is%20EMPTY)%20AND%20"Scope%20of%20change"%20%3D%20"Public"%20AND%20"QA%20Lead"%20!%3D%20unknown%20ORDER%20BY%20issuetype%2C%20"Scope%20of%20change"%2C%20status%2C%20resolution`
        };,
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
    }