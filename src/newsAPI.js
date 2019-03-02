const NewsAPI = require('newsapi');
const keys = require('./keys');
const newsapi = new NewsAPI(keys.newsAPI.key);
const moment = require('moment')

var newsSearch = (input) => {

    newsapi.v2.topHeadlines({
        q: input,
        language: 'en'
      }).then(response => {
        // console.log(response.articles[0]);
        let data = response.articles;
        data.forEach(function(el){
            let title = el.title;
            let date = moment( new Date(el.publishedAt)).format('LL')
            let description = el.description;
            let url = el.url;
            console.log(`
            Title: ${title}
            Date: ${date}
            ${description}
            URL: ${url}
            `)
        });
      });
}

module.exports = {
    newsSearch
}