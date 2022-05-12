fetch("https://luxcar.tech/wp-json/wp/v2/posts")
  .then((r) => r.json())
  .then((dt) => {
    let allData = dt;
    let array1 = allData.slice(0, 5);
    let array2 = allData.slice(6, 11);
    let appendto = document.querySelector("#all");
    const handleData = (arr) => {
      arr.forEach((blogArticle) => {
        let div = document.createElement("div");
        div.innerHTML = `
       <a href="/article.html?blog=${blogArticle.id}"><div class="content">${blogArticle.content.rendered}</div></a>
       `;

        appendto.appendChild(div);
      });
    };
    handleData(array1);
    document.querySelector(".viewMore").addEventListener("click", (e) => {
      handleData(array2);
      e.target.style.display = "none";
    });
  });
