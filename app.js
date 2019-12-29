const request = require('request');

const url = 'https://api.darksky.net/forecast/c5f2c915e55c4a57ecb2387f527a0716/28.7041,77.1025?lang=en';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWN0aW9uYW5hbmQiLCJhIjoiY2s0cjJpd3lzMnY3YjNpcXNoN3oxb3FkdSJ9.og2LkkH0n_sVx1XllTEfjw&limit=1';

request({url: geoUrl, json: true}, (error, response) => {
    console.log(`lat: ${response.body.features[0].center[1]} , lng: ${response.body.features[0].center[0]}`);
});

request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body);
    console.log(`${response.body.daily.data[0].summary} 
    Current temperature is ${response.body.currently.temperature} degree F and 
    there is ${response.body.currently.precipProbability} % chances for rain.`);
});