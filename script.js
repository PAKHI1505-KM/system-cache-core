// Music
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Memories
const memories = [
  { img:"assets/img1.jpg", text:"Being close without needing words." },
  { img:"assets/img2.jpg", text:"A quiet kind of safety." },
  { img:"assets/img3.jpg", text:"The way you always came back." },
  { img:"assets/img4.jpg", text:"Held like the world could wait." }
];

function showMemory(i){
  const box = document.getElementById("memoryDisplay");
  box.innerHTML =
  `<img src="${memories[i].img}" width="240"><p>${memories[i].text}</p>`;
}

// Hearts
function spawnHeart(){
  const h = document.createElement("div");
  h.innerText = "❤️";
  h.className = "heart";
  h.style.left = Math.random()*100 + "vw";
  h.style.top = "80vh";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),2500);
}
