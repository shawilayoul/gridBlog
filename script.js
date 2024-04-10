const articleContainer = document.querySelector(".article-container")


const getarticle = async()=>{
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let articles = await response.json()
   articles.map(({body,title})=>{
    const tamplate = `<article class="shadow rounded p-2 m-3">
    <h2 class="font-bold">${title}</h2>
    <p class="font-semibold">Author</p>
    <p>10/10/2020</p>
    <p>
     ${body}
    </p>
    <a href="article1.html" class="text-blue-700">read more</a>
  </article>`
  articleContainer.innerHTML += tamplate;
   })

}

getarticle()