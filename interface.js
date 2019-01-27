const appKey = config.MY_KEY;

window.onload = () => {
  let news = new News()
  news.scrapeStories()
}
