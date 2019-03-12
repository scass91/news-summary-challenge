describe('News', () => {
  it('has a title and a url', () => {
    var title = "This is the web title"
    var url = "This is the web url"
    var news = new News(title,url)
    expect(news.title).toEqual(title)
    expect(news.url).toEqual(url)
   })
 })
