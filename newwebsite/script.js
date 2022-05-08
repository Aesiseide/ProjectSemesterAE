const parentContainer = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

fetch("https://luxcar.tech/wp-json/wp/v2/posts")
  .then((response) => response.json())
  .then((data) => {
    let firstFour = data.slice(0, 3);
    let nextFour = data.slice(4, 7);
    let lasttFour = data.slice(8, 11);
    const allFour = [firstFour, nextFour, lasttFour];

    let dataAppend = (dataArray, appendto) => {
      dataArray.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `
     <div class="content">${element.content.rendered}</div>
     `;
        // div.classList.add("mySlides");
        appendto.appendChild(div);
      });
    };

    allFour.forEach((el) => {
      let slide1 = document.createElement("div");

      slide1.classList.add("mySlides");
      dataAppend(el, slide1);
      parentContainer.append(slide1);
    });

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "grid";
    }

    next.addEventListener("click", () => {
      plusSlides(-1);
    });
    prev.addEventListener("click", () => {
      plusSlides(1);
    });
  });
