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



