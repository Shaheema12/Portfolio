// Smooth navigation scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Profile photo upload & preview
const input = document.getElementById('uploadPhoto');
const profilePic = document.getElementById('profile-pic');

input.addEventListener('change', e => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = ev => {
      profilePic.src = ev.target.result;
      localStorage.setItem('profilePic', ev.target.result);
    };
    reader.readAsDataURL(file);
  }
});

// Persist uploaded photo on reload
window.addEventListener('load', () => {
  const saved = localStorage.getItem('profilePic');
  if (saved) {
    profilePic.src = saved;
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Typing effect for Name
const nameText = "Hi I'm Shaheema S A";
const typingNameElement = document.getElementById("typing-name");
const nameCursor = document.getElementById("name-cursor");

let nameIndex = 0;
function typeName() {
  if (nameIndex < nameText.length) {
    typingNameElement.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 120); // speed for name
  }
}
typeName();

// Typing effect for About description (starts after name finishes)
const aboutText = "I’m passionate about building AI-powered solutions, web apps, and scalable systems. Always eager to learn and innovate with technology.";
const typingElement = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

let aboutIndex = 0;
function typeAbout() {
  if (aboutIndex < aboutText.length) {
    typingElement.textContent += aboutText.charAt(aboutIndex);
    aboutIndex++;
    setTimeout(typeAbout, 50);
  }
}

// Delay about text until name finishes
setTimeout(typeAbout, nameText.length * 120 + 500);
// Profile picture upload & preview
document.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.getElementById("profile-pic");
  const fileInput = document.getElementById("photo-upload");

  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});







