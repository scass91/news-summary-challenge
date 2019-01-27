describe("News", () => {
  summary("News has a headline", () => {
    it("Headlines can be grabbed", () => {
      news = new News;
      let requestedMock = { open: () => {}, send: () => {} }
      news.scrapeStories(requestedMock)
      news.headlines.push(mockedResponse.response.results)
      expectEquality(news.headlines[0].length, 10)
    })
   })
 })
