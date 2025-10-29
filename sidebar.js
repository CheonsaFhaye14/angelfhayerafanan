const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const contentWrapper = document.getElementById("contentWrapper");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  contentWrapper.classList.toggle("shift");

  // Change icon
  menuBtn.textContent = sidebar.classList.contains("show") ? "×" : "☰";
});
