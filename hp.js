let btnChange = document.querySelector("#icon__change");
let checkLanguage = document.querySelector("#icon__inside_change");
let subMenuCHange = document.querySelector("#sub__menu__language__id");
navbarItem = document.querySelectorAll(".navbar__item__list");
navbarList = document.querySelector("#navbar__list");
let vedioLinkList = document.querySelectorAll(".all__vedio__links");

checkLanguage.addEventListener("click", function (e) {
  this.classList.toggle("active");
});

// Btn animation
for (let i = 0; i < vedioLinkList.length; i++) {
  vedioLinkList[i].addEventListener("mouseenter", (e) => {
    let element = e.target.querySelector(".fas");
    element.style.transform = "translateX(10px)";
  });
  vedioLinkList[i].addEventListener("mouseout", (e) => {
    let element = e.target.querySelector(".fas");
    element.style.transform = "translateX(0px)";
  });
}
