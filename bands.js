var axios = require('axios');
var moment = require('moment');

var searchBandEvents = (artist) => {

    console.log(`
    Searching local events for ${artist}`);

    var query = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

    axios.get(query)
      .then(function (response) {
        let data = response.data;
        data.forEach(function(el){
            let venueName = el.venue.name;
            let venueLocation = `${el.venue.city}, ${el.venue.country}`
            let date = moment(new Date(el.datetime)).format('LL');
            console.log(`
            Venue: ${venueName}
            Location: ${venueLocation}
            Date: ${date}
            `)
        })
       
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = {
    searchBandEvents
}
