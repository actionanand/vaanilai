const request = require('request');

const url = 'https://api.darksky.net/forecast/c5f2c915e55c4a57ecb2387f527a0716/37.8267,-122.4233';

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});