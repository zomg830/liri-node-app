const Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var moment = require('moment');


var searchSpotify = (song) => {
    console.log(`Searching spotify for ${song}`);
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    
    spotify
        .search({ type: 'track', query: `${song}` })
        .then(function(response) {
        var songs = response.tracks.items;
        songs.forEach(function(el){
            let name = el.name;
            let artists = "";
            el.artists.forEach(function(e){
                artists += " " + (e.name) + ",";
            });
            artists = artists.slice(0, -1);
            let album = el.album.name
            let release = moment(new Date(el.album.release_date)).format('LL');
            console.log(`
            Song Title: ${name}
            Artists:${artists}
            Album: ${album}
            Release Date: ${release}
            `);
        })
        // console.log(response.tracks.items[0]);
        
        })
        .catch(function(err) {
        console.log(err);
        });
    }

module.exports = {
    searchSpotify
};