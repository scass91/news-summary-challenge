//https://www.w3schools.com/xml/dom_httprequest.asp
"use strict"

class News {
  constructor () {
    this.headlines = []
  }

  scrapeStories (story = new XMLHttpRequest()) {
    story = story;
    const my_key = config.MY_KEY
    let url = `https://content.guardianapis.com/search?api-key=${my_key}`
      request.open('GET', url)
      request.onload = () => {
        let info = JSON.parse(story.response)
        this.headlines.push(info.response.results)
    }
    request.send()
  }
}
