
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Init sidebar hidden on mobile
if (window.innerWidth < 768) {
  sidebar.classList.add("-translate-x-full");
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.add("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
  }
});
