// const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = `http://api.weatherstack.com/current?access_key=4f1eacb13fca01585bc049ce47d989e8&query=Jodhpur`;
// const urlGeocoding = `http://api.mapbox.com/geocoding/v5/mapbox.places/jodhpur.json?access_token=pk.eyJ1Ijoia2FsbHVkdWRod2FsYSIsImEiOiJjbDVreDcwazcwZWRkM3BwYTA4Z2R5aB1In0.8pt9GpKoSyyXFxfwfZyCPA&limit=1`;

// request({url, json: true}, (error, response) => {
//     // console.log(response.body.current);
//     console.log(`It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike}`);
// }); 

// request({url: urlGeocoding, json: true}, (error, response) => {
//     if (error) {
//         console.error(error);
//     } else if (response.body.message) {
//         console.error(response.body.message);
//     } else {
//         console.log(response.body.features[0].center[0], response.body.features[0].center[1]);
//     }
// }); 

const address = process.argv[2];

if (address) {
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Error: ', error);
        }
            
        console.log('Data: ', data)
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error);    
            }
            console.log("Location: ", data.place);
            console.log("Data: ", forecastData.weather_descriptions[0]);
        });
    });
} else {
    console.log("Please pass a string containing city name as argument.");
}