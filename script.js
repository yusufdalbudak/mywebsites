function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DARK LIGHT MODE

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".color-icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

btn.addEventListener("click", function () {
  toggleTheme();
});

btn2.addEventListener("click", function () {
  toggleTheme();
});

function toggleTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
      setLightMode();
  } else {
      setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("data-src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("data-src-light");
  });
}
