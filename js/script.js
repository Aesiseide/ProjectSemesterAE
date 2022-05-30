const parentContainer = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

fetch("https://luxcar.tech/wp-json/wp/v2/posts?per_page=100")
  .then((response) => response.json())
  .then((data) => {
    let firstFour = data.slice(0, 4);
    let nextFour = data.slice(4, 8);
    let lasttFour = data.slice(8, 12);
    //group all images into one associative array
    const allFour = [firstFour, nextFour, lasttFour];

    let dataAppend = (dataArray, appendto) => {
      //loop through each image array and show it in the dom
      dataArray.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `
       <a href="/article.html?blog=${element.id}" class="content">${element.content.rendered}</a>
     `;
        // div.classList.add("mySlides");
        appendto.appendChild(div);
      });
    };

    //loop through each image collection and call the dataAppend function
    allFour.forEach((el) => {
      let slide1 = document.createElement("div");

      slide1.classList.add("mySlides");
      dataAppend(el, slide1);
      parentContainer.append(slide1);
    });

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      //get all slides
      let slides = document.getElementsByClassName("mySlides");

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      //loop through all slides
      for (i = 0; i < slides.length; i++) {
        //hide all slides
        slides[i].style.display = "none";
      }

      // show only one slide
      slides[slideIndex - 1].style.display = "grid";
    }

    next.addEventListener("click", () => {
      plusSlides(-1);
    });
    prev.addEventListener("click", () => {
      plusSlides(1);
    });
  });
