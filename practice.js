const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1 style="color:#d62828;">Yay!! ❤️ You made my day 😍</h1>
    <p style="font-size:20px;">Happy Valentine’s Day 💕</p>
  `;
});
