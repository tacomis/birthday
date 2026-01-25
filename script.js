const openBtn = document.getElementById("openBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const bgMusic = document.getElementById("bgMusic");
const noteBtn = document.getElementById("noteBtn");

// Floating stars & hearts
function createFloating() {
  const el = document.createElement("div");
  el.className = Math.random() > 0.5 ? "star" : "heart";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = window.innerHeight + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}
setInterval(createFloating, 250);

// Open gift
openBtn.addEventListener("click", () => {
  confetti({ particleCount: 400, spread: 160 });
  bgMusic.play().catch(() => {});

  document.querySelector(".hero").style.display = "none";
  surprise.classList.add("show");
});

// Note
noteBtn.addEventListener("click", () => {
  alert("🎉 Happy Birthday Wahida!\nERROR: missing item - (your smile) ");
});
