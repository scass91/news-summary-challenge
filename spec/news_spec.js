describe("News", function() {
  summary("News can be created", function() {
   it("can create a news story", function() {
     var news = new News();
     expectEquality((JSON.stringify(news)),"{}")
   })
 })
})
