const openBtn = document.getElementById("openBtn");
const giftBox = document.getElementById("giftBox");
const surprise = document.getElementById("surprise");
const bgMusic = document.getElementById("bgMusic");
const noteBtn = document.getElementById("noteBtn");

// FLOATING STARS & HEARTS
function createFloating() {
  const elem = document.createElement("div");
  elem.className = Math.random() < 0.3 ? "heart" : "star";
  elem.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(elem);
  setTimeout(() => elem.remove(), 5000);
}
setInterval(createFloating, 200);

// OPEN GIFT
openBtn.addEventListener("click", () => {
  giftBox.style.animation = "none";

  setTimeout(() => {
    // MORE CONFETTI
    confetti({ particleCount: 400, spread: 150, origin: { y: 0.6 } });
    confetti({ particleCount: 250, spread: 120, origin: { y: 0.6 } });

    surprise.classList.add("show");
    openBtn.style.display = "none";
    giftBox.style.display = "none";

    bgMusic.play().catch(() => {});
  }, 600);
});

// NOTE BUTTON
noteBtn.addEventListener("click", () => {
  alert("🎉 Happy Birthday Wahida! Wishing you all the joy and happiness in the world! 🎉");
});
