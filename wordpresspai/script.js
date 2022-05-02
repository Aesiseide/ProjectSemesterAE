const baseUrl = "https://luxxcar.000webhostapp.com/wp-json/wp/v2/posts";
const appContainer = document.querySelector(".post-Container");

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  posts.forEach(function (posts) {
    appContainer.innerHTML += `<div class="posts-container"><h1> ${posts.title.rendered}</h1>${posts.content.rendered}</div>`;
  });
}

getPosts(baseUrl);

var span = document.getElementsByTagName("span");
var div = document.getElementsByTagName("div");
var l = 0;
span[1].onclick = () => {
  l++;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l > 4) {
      l = 4;
    }
  }
};
span[0].onclick = () => {
  l--;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};
