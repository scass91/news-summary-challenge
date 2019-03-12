describe('News List', () => {
  it('retrieves a list of news articles', () => {
    let list = new NewsList
    list.getArticleList()
    expect(list.length).toEqual(10)
  })
})
