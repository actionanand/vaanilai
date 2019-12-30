const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/c5f2c915e55c4a57ecb2387f527a0716/${lat},${lng}?lang=en`;
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to the Vaanilai server', undefined);
        } else if (response.body.error) {
            callback('Unable to find the location, please try different location!', undefined);
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                currentTemp: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            });
        }
    });
}

module.exports = forecast