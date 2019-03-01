const omdb = require('omdb-client');
var keys = require('./keys.js');
var moment = require('moment');

var searchOMDB = (movie, year = NaN) => {
    console.log(`
    Searching OMDB for ${movie}`)
    var params = {
        apiKey: keys.omdb.key,
        title: movie,
        year: year
    }
    omdb.get(params, function(err, data) {
        if (data){
            let title = data.Title;
            let year = data.Year;
            let released = moment(new Date(data.Released)).format('LL');
            let rating = data.Rated;
            let imdb = data.imdbRating;
            let rt = data.Ratings[2].Value;
            let countries = data.Country;
            let language = data.Language
            let plot = data.Plot;
            let actors = data.Actors;
            let log =`
            Title: ${title} (${year})
            Released: ${released}
            Rating: ${rating}
            IMDB Rating: ${imdb}/10
            Rotten Tomatoes Rating: ${rt}
            Country(s) of Production: ${countries}
            Language(s): ${language}
            Plot: ${plot}
            Actors: ${actors}
            `
            console.log(log);
        }    
        else if (err){
            console.log(err);
        }
    });
}

module.exports = {
    searchOMDB
}