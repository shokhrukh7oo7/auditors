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
const teamModalInfo = document.getElementById("teamModalInfo");
const teamModalPhone = document.getElementById("teamModalPhone");
const teamModalEmail = document.getElementById("teamModalEmail");
const teamCloseBtn = document.getElementById("teamCloseBtn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    teamModal.style.display = "flex";

    // задержка нужна, чтобы transition сработал после display:flex
    setTimeout(() => {
      teamModal.classList.add("show");
    }, 10);

    teamModalImg.src = card.dataset.img;
    teamModalName.textContent = card.dataset.name;
    teamModalRole.textContent = card.dataset.role;
    teamModalInfo.textContent = card.dataset.info;

    // Телефон и почта
    teamModalPhone.textContent = card.dataset.phone;
    teamModalPhone.href = "tel:" + card.dataset.phone.replace(/\s+/g, "");
    teamModalEmail.textContent = card.dataset.email;
    teamModalEmail.href = "mailto:" + card.dataset.email;
  });
});

function closeModal() {
  teamModal.classList.remove("show");
  setTimeout(() => {
    teamModal.style.display = "none";
  }, 400);
}

if (teamCloseBtn) {
  teamCloseBtn.addEventListener("click", closeModal);
}

window.addEventListener("click", (e) => {
  if (e.target === teamModal) {
    closeModal();
  }
});

// Закрытие по ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
// ============================================================================
// TAB TABLE JS
const btnCompanies = document.getElementById("btn-companies");
const btnAuditors = document.getElementById("btn-auditors");
const companiesTable = document.getElementById("companies-table");
const auditorsTable = document.getElementById("auditors-table");

if (btnCompanies) {
  btnCompanies.addEventListener("click", () => {
    btnCompanies.classList.add("active");
    btnAuditors.classList.remove("active");
    companiesTable.classList.remove("hidden");
    auditorsTable.classList.add("hidden");
  });
}
if (btnAuditors) {
  btnAuditors.addEventListener("click", () => {
    btnAuditors.classList.add("active");
    btnCompanies.classList.remove("active");
    auditorsTable.classList.remove("hidden");
    companiesTable.classList.add("hidden");
  });
}
