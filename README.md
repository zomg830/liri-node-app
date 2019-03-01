# liri-node-app

# Project Overview
This Language Interpretation and Recognition Interface (*LIRI* for short) is a Node.js-based CLI. The program takes in six commands: 

```javascript
- concert
- spotify
- movie
- news
- weather
- random
```

Each of these commands corresponds with a different API the `concert ` command links to the Bands in Town API. The `spotify` command should be fairly obvious. The `movie` command links to the OMDB API. The `news` command calls the NewsAPI to find stories corresponding to the input keyword(s). The `weather` command accepts and address, city, state, zip (really anything you can type into Google Maps) and returns the some current local weather conditions and a 7 day temperature/precipitation forecast. And finally the `random` command links to a separate file and draws a command from there.

Each command requires an input flag that takes in a string of data, for best results use quotation marks around your queries. All commands accept `-i` as the universal input flag. So if I wanted to search for *The Lion King* on the OMDB API, I would simply go to the project directory and run the application as follows:

```javascript
node liri.js movie -i "The Lion King" -y "1994"
```

As you can see, the movie command also has an additional flag, `-y` that passes in the year in which the movie was released.

# Example Workflow

It is very simple to get the app set up, simply navigate to the root directory of the `liri-node-app` and run an example command, such as the one shown below:

<img src="/assets/images/Capture3.JPG" width="70%" >

Upon execution of the code, the data retrieved from the API will be presented in the command line interface.

<img src="/assets/images/Capture5.JPG" width="70%" >

# APIs & Dependencies
* dotenv
* moment
* node-spotify-api
* omdb-client
* yargs
* axios
* newsapi
* Bandsintown API
* Google Geocoding API
* DarkSky Weather API
