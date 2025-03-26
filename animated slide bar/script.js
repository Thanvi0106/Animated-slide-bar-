const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

// Open Nav bar
openBtn.addEventListener('click', () => {
    nav.forEach((el) => el.classList.add('visible'));
  });
  
  // Close Nav bar
  closeBtn.addEventListener('click', () => {
    nav.forEach((el) => el.classList.remove('visible'));
  });