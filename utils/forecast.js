const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4f1eacb13fca01585bc049ce47d989e8&query=${latitude},${longitude}`;
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined);
        } 
        else if (!response.body.current) {
            callback('Unable to find location, try another search', undefined);
        }
        else {
            callback(undefined, response.body.current);
        }
    });
}

module.exports = forecast;