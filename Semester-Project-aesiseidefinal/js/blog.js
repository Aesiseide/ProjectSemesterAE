fetch("https://luxcar.tech/wp-json/wp/v2/posts?per_page=100")
  .then((r) => r.json())
  .then((dt) => {
    let allData = dt;
    //slice returns a specified part of any array
    let array1 = allData.slice(0, 10);
    let array2 = allData.slice(11, 20);
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

    //listen for a click event on the button then carry out a function
    document.querySelector(".viewMore").addEventListener("click", (e) => {
      handleData(array2);
      e.target.style.display = "none";
    });
  });
