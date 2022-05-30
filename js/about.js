fetch("https://luxcar.tech/wp-json/wp/v2/pages")
  .then((r) => r.json())
  .then((data) => {
    const aboutPage = data.filter((page) => page.id == 2);
    document.querySelector("#about").innerHTML = aboutPage[0].content.rendered;
  });
