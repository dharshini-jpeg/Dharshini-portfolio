const navLinks = document.querySelectorAll(".nav-link, .btn");
const sections = document.querySelectorAll(".section");
const skills = document.querySelectorAll(".skill");

function showSection(sectionId) {
  sections.forEach(sec => {
    sec.classList.remove("active");
    if (sec.id === sectionId) {
      sec.classList.add("active");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.section === sectionId) {
      link.classList.add("active");
    }
  });
}

// Default view
showSection("home");

// Navigation
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// Skills click
skills.forEach(skill => {
  skill.addEventListener("click", () => {
    skills.forEach(s => s.classList.remove("selected"));
    skill.classList.add("selected");
  });
});

function updateGreeting() {
  const greetingEl = document.getElementById('greeting');
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = 'Good Morning ☀️';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon ☀️';
  } else if (hour >= 17 && hour < 21) {
    greeting = 'Good Evening 🌇';
  } else {
    greeting = 'Good Night 🌙';
  }

  greetingEl.textContent = greeting;
}

updateGreeting();

