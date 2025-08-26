const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.querySelector("nav");
const showBtn = document.getElementById("show-btn");
const langContainer = document.querySelector(".langugage-container");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar-menu-item a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// следим за изменением ширины
function moveButton() {
  if (window.innerWidth < 992) {
    navMenu.appendChild(showBtn); // перемещаем внутрь меню
  } else {
    langContainer.appendChild(showBtn); // возвращаем на место
  }
}

moveButton(); // первый запуск
window.addEventListener("resize", moveButton);
