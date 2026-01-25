const openBtn = document.getElementById("openBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const bgMusic = document.getElementById("bgMusic");
const noteBtn = document.getElementById("noteBtn");

// FLOATING HEARTS & STARS
function createFloating() {
  const el = document.createElement("div");
  el.className = Math.random() < 0.4 ? "heart" : "star";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.bottom = "-30px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}
setInterval(createFloating, 250);

// OPEN GIFT
openBtn.addEventListener("click", () => {
  confetti({ particleCount: 400, spread: 150, origin: { y: 0.6 } });
  confetti({ particleCount: 250, spread: 120, origin: { y: 0.6 } });

  surprise.classList.add("show");
  openBtn.style.display = "none";
  giftBox.style.display = "none";

  bgMusic.play().catch(() => {});
});

// NOTE
noteBtn.addEventListener("click", () => {
  alert("🎉 Happy Birthday Wahida! ERROR: Missing item (your smile) 😄 💖");
});
