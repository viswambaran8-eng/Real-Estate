// Hamburger

// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Animate hamburger
  sidebar.classList.toggle("active"); // Toggle sidebar
  overlay.classList.toggle("active"); // Toggle overlay
  document.body.classList.toggle("no-scroll"); // Disable body scroll
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll"); // Enable body scroll
});

// About

document.addEventListener("DOMContentLoaded", () => {
  const aboutTabs = document.querySelectorAll(".about-tab");
  const aboutContents = document.querySelectorAll(".about-desc");

  aboutTabs.forEach((tab) => {
    tab.addEventListener("click", () => {

      // Remove active from all
      aboutTabs.forEach((t) => t.classList.remove("active"));
      aboutContents.forEach((c) => c.classList.remove("active"));

      // Add active to clicked
      tab.classList.add("active");
      document
        .getElementById(tab.dataset.tab)
        .classList.add("active");
    });
  });
});



// FAQ

function toggleFaq(index) {
  const answers = document.querySelectorAll(".faq-answer");
  const btns = document.querySelectorAll(".faq-btn");

  answers.forEach((ans, i) => {
    if (i === index) {
      const open = ans.style.display === "block";
      ans.style.display = open ? "none" : "block";
      btns[i].innerText = open ? "+" : "−";
    } else {
      ans.style.display = "none";
      btns[i].innerText = "+";
    }
  });
}

/* SEARCH FUNCTION */
function searchFaq() {
  const input = document.querySelector(".faq-search").value.toLowerCase();
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item, index) => {
    const text = item.innerText.toLowerCase();
    const answer = item.nextElementSibling;

    if (text.includes(input)) {
      item.style.display = "flex";
      answer.style.display = "none";
      item.querySelector(".faq-btn").innerText = "+";
    } else {
      item.style.display = "none";
      answer.style.display = "none";
    }
  });
}
