function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

fetch("https://luxcar.tech/wp-json/wp/v2/posts")
  .then((r) => r.json())
  .then((l) => {
    let blogId = getParameterByName("blog");
    console.log(blogId);
    let allData = l;
    let singleBlog = allData.filter((y) => y.id == blogId);
    document.title = singleBlog[0].title.rendered;

    let appendto = document.querySelector("#single");
    let div = document.createElement("div");
    let blogArticle = singleBlog[0];
    div.innerHTML = `
     <div class="content"><h1>${blogArticle.title.rendered}</h1>${blogArticle.content.rendered}</div>
     `;

    appendto.appendChild(div);
  });
