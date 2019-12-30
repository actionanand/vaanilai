const request = require('request');

const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geoCode('nagercoil', (error, data) => {
    if (error) {
        return console.log(error);
    }
    forecast(data.lat, data.lng, (error, respData) => {
        if (error) {
            console.log(error);
        }
        console.log(data.location);
        console.log(respData);
    });
});
