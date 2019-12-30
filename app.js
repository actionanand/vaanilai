const request = require('request');

const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geoCode('nagercoil', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
});

forecast(8.17, 77.43, (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);   
});
