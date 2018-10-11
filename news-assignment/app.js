let newsContainer = document.getElementById('newsContainer')

let newsItems = news.articles.map(function(article){
  return `<li>
            <h4 id="articleTitle"> <a href="${article.url}">${article.title}</a></h4>
            <label id="articleAuthor">By: ${article.author}</label>
            <div id="newsItem">
              <img src="${article.urlToImage}" />
              <p id="articleDescription">${article.description}</p>
              <p id="articlePublish">${article.publishedAt}</p>
            <div>
         </li>`
})
newsContainer.insertAdjacentHTML('beforeend',newsItems.join(''))
