const NewsAPI = require('newsapi');
const keys = require('./keys');
const newsapi = new NewsAPI(keys.newsAPI.key);

var newsSearch = (input) => {

    newsapi.v2.topHeadlines({
        q: input,
        language: 'en'
      }).then(response => {
        // console.log(response);
        let data = response.articles;
        data.forEach(function(el){
            let title = el.title;
            let description = el.description;
            let url = el.url;
            console.log(`
            Title: ${title}
            ${description}
            URL: ${url}
            `)
        });
      });
}

module.exports = {
    newsSearch
}