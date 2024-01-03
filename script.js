// let text = document.getElementById('text');
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let text1 = document.getElementById("text1");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  // text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  // hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + "px";
  // hill1.style.top = value * -1.5 + 'px';
  if (scrollPosition > 0) {
    parallaxSection.classList.add("scrolled");
  } else {
    parallaxSection.classList.remove("scrolled");
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Remove the dot (.) before 'show'
    } else {
      entry.target.classList.remove("show"); // Remove the dot (.) before 'show'
    }
  });
});

const hiddenElements = document.querySelectorAll(".sec");
hiddenElements.forEach((el) => observer.observe(el));

const navham = document.querySelector(".navham");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

navham.addEventListener("click", () => {
  nav.classList.add("open-nav"); // Assuming you have a 'show' class to control visibility
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav"); // Assuming you have a 'show' class to control visibility
});

const hiddenElements2 = document.querySelectorAll(".Parallax");
hiddenElements2.forEach((el) => observer.observe(el));
