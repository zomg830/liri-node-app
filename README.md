# liri-node-app

# Project Overview
This Language Interpretation and Recognition Interface (*LIRI* for short) is a Node.js-based CLI. The program takes in four commands: 

```javascript
* concert
* spotify
* movie
* random
```

Each of these commands corresponds with a different API the `concert ` command links to the Bands in Town API. The `spotify` command should be fairly obvious. The `movie` command links to the OMDB API. And finally the `random` command links to a separate file and draws a command from there.

Each command requires an input flag along with some data. All commands accept `-i` as the universal input flag. So if I wanted to search for *The Lion King* on the OMDB API, I would simply go to the project directory and run the application as follows:

```javascript
node liri.js movie -i "The Lion King" -y "1994"
```

As you can see, the movie command also has an addition flag, `-y` that accepts the year in which the movie was released.

# APIs & Dependencies
* dotenv
* moment
* node-spotify-api
* omdb-client
* yargs