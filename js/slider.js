/*  
Сделать переключение картинок при клике на миниатюру,
 - при клике на маленькую картинку показывать ее в большом виде - готово


SLIDER на JS
prev = document.querySelector("#prev");
next = document.querySelector("#next");
slideImg = document.querySelector(".slider-img img");
slideSmallImg = document.querySelector(".slider-small-img");

slideSmallImg.onclick = function (event) {
  let element = event.target;
  if (event.target.nodeName == "IMG") {
    slideImg.src = element.dataset.src;
  }
};

next.onclick = function () {
  let currentSlide = document.querySelector(
    ".slider .slider-small-img li.active"
  );
  currentSlide.classList.remove("active");

  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    nextSlide.classList.add("active");
  } else {
    nextSlide = document.querySelector(".slider .slider-small-img li");
    nextSlide.classList.add("active");
  }

  slideImg.src = nextSlide.querySelector("img").src;
};

prev.onclick = function () {
  let currentSlide = document.querySelector(
    ".slider .slider-small-img li.active"
  );

  currentSlide.classList.remove("active");
  let prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    prevSlide.classList.add("active");
  } else {
    prevSlide = document.querySelector(
      ".slider .slider-small-img li:last-child"
    );
    prevSlide.classList.add("active");
  }

  slideImg.src = prevSlide.querySelector("img").src;
};
*/

/* SLIDER JQUERY */

slider = $(".slider");

$("#prev").on("click", function () {
  let elem = $(".slider .slider-small-img li.active").prev();
  $(".slider .slider-small-img li.active").removeClass("active");

  if (!elem.length) {
    elem = $(".slider .slider-small-img li:last-child");
  }
  elem.addClass("active");

  $(".slider-img img").attr("src", elem.find("img").attr("src"));
});

$("#next").on("click", function () {
  let elem = $(".slider .slider-small-img li.active").next();
  $(".slider .slider-small-img li.active").removeClass("active");

  if (!elem.length) {
    elem = $(".slider .slider-small-img li");
  }
  elem.addClass("active");

  $(".slider-img img").attr("src", elem.find("img").attr("src"));
});
