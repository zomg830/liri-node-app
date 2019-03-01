require("dotenv").config();
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const spotify = require('./spotify');
const OMDB = require('./OMDB');
var moment = require('moment');
var bands = require('./bands');

const inputOptions = {
    describe: 'input data',
    demand: true,
    alias: 'i'
};

const yearOptions = {
    describe: 'year of release',
    demand: false, 
    alias: 'y'
}

const argv = yargs
    .command('concert', 'Search the Bands in Town Artist Events API', {
        input: inputOptions
    })
    .command('spotify', 'Pulls information of input from Spotify',{
        input: inputOptions
    })
    .command('movie', 'Searches OMDB for the subject movie', {
        input: inputOptions,
        year: yearOptions
    })
    .command('random', 'Calls a command from the random.txt file', {

    })
    .help()
    .argv;
var command = argv._[0];

var logArgs = () => {
    fs.appendFileSync('log.txt',
    moment().format('MMMM Do YYYY, h:mm:ss a')
    + JSON.stringify(argv, undefined, 2) + "\n");
}

var runApp = (command, input, year) => {
    if (command === 'concert'){
        bands.searchBandEvents(input);
        logArgs();
    }
    else if (command === 'spotify'){
        spotify.searchSpotify(input);
        logArgs();
    }
    else if (command === 'movie'){
        OMDB.searchOMDB(input, year);
        logArgs();
    }
    else if (command === 'random'){
        let fsCommand = fs.readFileSync('random.txt', 'utf-8').split(',');
        runApp(fsCommand[0], fsCommand[1], parseInt(fsCommand[2]));
        logArgs();
    }
    else{
        console.log('Command not recognized');
        logArgs();
    }
}
 
runApp(command, argv.input, argv.year);
