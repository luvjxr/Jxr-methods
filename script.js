console.log("Site JXR Method chargé !");

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");
  if (music) music.volume = 0.3;

  muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇" : "🔊";
  });
});

tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 50 },
    color: { value: "#ffb3d1" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1 }
  },
  background: {
    color: "#00000000"
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");
  if (music && muteBtn) {
    music.volume = 0.3;
    muteBtn.addEventListener("click", () => {
      music.muted = !music.muted;
      muteBtn.textContent = music.muted ? "🔇" : "🔊";
    });
  }
  document.body.classList.add("loaded");
});

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
