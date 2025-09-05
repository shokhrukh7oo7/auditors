// ============================================================================
// HEADER MENU BURGER
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

// ============================================================================
// REQUEST MODAL
const showModalBtn = document.querySelectorAll("#show-btn");
const closeModalBtn = document.getElementById("close-btn");
const requestModal = document.getElementById("request-modal");
const overlay = document.getElementById("overlay");

const addHidden = () => {
  requestModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// remove classlist hidden
const removeHidden = () => {
  requestModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showModalBtn.forEach((item) => {
  item.addEventListener("click", () => {
    removeHidden();
  });
});

closeModalBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
// ============================================================================
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// ============================================================================
// TEAM MODAL (TABS)
// Табы
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.getAttribute("data-filter");

    cards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Модалка
const teamModal = document.getElementById("teamModal");
const teamModalImg = document.getElementById("teamModalImg");
const teamModalName = document.getElementById("teamModalName");
const teamModalRole = document.getElementById("teamModalRole");
const teamCloseBtn = document.getElementById("teamCloseBtn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    teamModal.style.display = "flex";
    teamModalImg.src = card.dataset.img;
    teamModalName.textContent = card.dataset.name;
    teamModalRole.textContent = card.dataset.role;
  });
});

teamCloseBtn.addEventListener("click", () => {
  teamModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === teamModal) {
    teamModal.style.display = "none";
  }
});
// Закрытие по ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    teamModal.style.display = "none";
  }
});
