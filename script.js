/* ============================================================
   LOGIKA WEBSITE — biasanya tidak perlu diubah.
   Untuk ganti isi konten, edit file config.js saja.
   ============================================================ */

// ---------- Render konten dari CONFIG ----------
document.getElementById("recipientNameCover").textContent = CONFIG.recipientName;
document.getElementById("letterName").textContent = CONFIG.recipientName;
document.getElementById("letterText").textContent = CONFIG.letterText;
document.getElementById("letterSign").textContent = CONFIG.senderName;

document.getElementById("momentLabel").textContent = CONFIG.momentLabel;
document.getElementById("momentNote").textContent = CONFIG.momentNote;

document.getElementById("songTitle").textContent = CONFIG.songTitle;
document.getElementById("songVideo").src = CONFIG.songVideoUrl;
document.getElementById("songNote").textContent = CONFIG.songNote;

document.getElementById("giftText").textContent = CONFIG.giftText;

// Galeri
const galleryGrid = document.getElementById("galleryGrid");
CONFIG.photos.forEach((p) => {
  const item = document.createElement("div");
  item.className = "gallery__item";
  item.innerHTML = `<img src="${p.src}" alt="${p.caption}" /><div class="gallery__caption">${p.caption}</div>`;
  galleryGrid.appendChild(item);
});

// Timeline (Journey)
const timelineList = document.getElementById("timelineList");
CONFIG.timeline.forEach((t) => {
  const item = document.createElement("div");
  item.className = "timeline__item";
  item.innerHTML = `
    <div class="timeline__date">${t.date}</div>
    <div class="timeline__title">${t.title}</div>
    <p class="timeline__text">${t.text}</p>
  `;
  timelineList.appendChild(item);
});

// ---------- Navigasi antar "scene" ----------
const scenes = document.querySelectorAll(".scene");
const sceneHistory = [];
let currentScene = "cover";

function goTo(sceneName, { remember = true } = {}) {
  if (remember && currentScene !== sceneName) {
    sceneHistory.push(currentScene);
  }

  currentScene = sceneName;

  scenes.forEach((s) => {
    s.classList.toggle("scene--active", s.dataset.scene === sceneName);
  });

  if (sceneName === "letter") {
    document.querySelector(".letter-video")?.play().catch(() => {});
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  const previousScene = sceneHistory.pop();
  if (previousScene) {
    goTo(previousScene, { remember: false });
    return;
  }

  goTo("letter");
}

function nextScene() {
  goTo("letter");
}

document.querySelectorAll("[data-next]").forEach((el) => {
  el.addEventListener("click", () => goTo(el.dataset.next));
});

document.querySelectorAll("[data-back]").forEach((el) => {
  el.addEventListener("click", goBack);
});

document.querySelectorAll("[data-home]").forEach((el) => {
  el.addEventListener("click", () => {
    sceneHistory.length = 0;
    if (envelopeOpenTimeout) {
      clearTimeout(envelopeOpenTimeout);
      envelopeOpenTimeout = null;
    }
    envelope.classList.remove("envelope--open");
    goTo("cover", { remember: false });
  });
});

// ---------- Amplop (envelope) ----------
const envelope = document.getElementById("envelope");
let envelopeOpenTimeout = null;
envelope.addEventListener("pointerdown", () => {
  if (envelope.classList.contains("envelope--open")) return;
  envelope.classList.add("envelope--open");
  envelopeOpenTimeout = setTimeout(() => goTo("gallery"), 900);
});

// ---------- Countdown ----------
const target = new Date(CONFIG.momentTargetDate).getTime();
function updateCountdown() {
  const now = Date.now();
  let diff = target - now;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("cdDays").textContent = String(days).padStart(2, "0");
  document.getElementById("cdHours").textContent = String(hours).padStart(2, "0");
  document.getElementById("cdMinutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("cdSeconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Gift box reveal ----------
const giftBox = document.getElementById("giftBox");
const giftReveal = document.getElementById("giftReveal");
const giftHint = document.getElementById("giftHint");
giftBox.addEventListener("click", () => {
  giftBox.classList.add("gift-box--opened");
  giftBox.textContent = "";
  giftBox.innerHTML = "<span>💌</span>";
  giftReveal.classList.add("gift-reveal--visible");
  giftHint.style.display = "none";
});
