accordionItems = document.querySelector("#accordion");

accordionItems.onclick = function (sobitie) {
  if (sobitie.target.classList.contains("accordion-item-header")) {
    if (sobitie.target.parentElement.classList.contains("show")) {
      sobitie.target.parentElement.classList.remove("show");
    } else {
      accordionItemShow = document.querySelector(".accordion-item.show");

      if (accordionItemShow != null) {
        accordionItemShow.classList.remove("show");
      }

      sobitie.target.parentElement.classList.add("show");
    }
  }
};
