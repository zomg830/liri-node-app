# liri-node-app

# Project Overview
This Language Interpretation and Recognition Interface (*LIRI* for short) is a Node.js-based CLI. The program takes in four commands: 

```javascript
- concert
- spotify
- movie
- random
```

Each of these commands calls (with the exception of `random`) calls upon a different API: the `concert ` command links to the __Bands in Town__ API. The `spotify` command should be fairly obvious. The `movie` command links to the __OMDB__ API. And finally the `random` command links to a separate text file and draws in the command from there.

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
