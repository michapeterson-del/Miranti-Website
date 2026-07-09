document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const headerInner = document.querySelector(".header-inner");
  if (toggle && headerInner) {
    toggle.addEventListener("click", () => {
      headerInner.classList.toggle("open");
    });
  }
});
