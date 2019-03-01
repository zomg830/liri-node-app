const axios = require('axios');
const keys = require('./keys');
const moment = require('moment');

var findWeather = (address) => {
    var encodedAddr = encodeURIComponent(address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}&key=${keys.weather.googleAPI}`;
    
    axios.get(geocodeUrl).then((response) => {
        if (response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address.')
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;    
        var weatherUrl = `https://api.darksky.net/forecast/${keys.weather.weatherAPI}/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    }).then((response) => {
        // console.log(response.data.daily.data[0])
        let x = moment.unix(response.data.currently.time).format("ddd, MMMM D hA");
        // console.log(x)
        let condition = response.data.currently.summary;
        let humidity = response.data.currently.humidity;
        let windSpeed = response.data.currently.windSpeed;
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`
        =============================================
        Current weather data @ ${x}:

        Condition: ${condition}
        Temperature: ${temperature}°F
        Humidity: ${humidity}%
        Wind Speed: ${windSpeed} mph
        Feels like: ${apparentTemperature}°F
        =============================================
        `);
        let daily = response.data.daily.data;
        daily.forEach(function(el){
            let forecastTime = moment.unix(el.time).format("ddd, MMMM D");
            let summary = el.summary
            let tempHigh = el.temperatureHigh
            let tempLow = el.temperatureLow
            let precip = el.precipProbability * 100;
        console.log(`
        Forecast ${forecastTime}:
        ${summary}
        High: ${tempHigh}°F
        Low: ${tempLow}°F
        Precip.: ${precip}%
        `)
        })
    }).catch((e) => {
        if (e.code === 'ENOTFOUND'){
            console.log('Unable to connect to API servers.');
        } else {
            console.log(e.message);
        }
    });
}

module.exports = {
    findWeather
}

