const articleContainer = document.querySelector(".article-container");

const getarticle = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //let response = await fetch("https://fakestoreapi.com/products");
  let articles = await response.json();
  articles.map(({ title, body }) => {
    const tamplate = `<article class="shadow rounded p-2 m-3">
    <h2 class="font-bold">${title}</h2>
    <p class="font-semibold">Author</p>
    <p>
     ${body}
    </p>
    <a href="article1.html" class="text-blue-700">read more</a>
  </article>`;
    articleContainer.innerHTML += tamplate;
  });
};

getarticle();
