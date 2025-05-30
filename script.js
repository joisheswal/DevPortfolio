"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Set last modified date
  document.getElementById("last-modified").textContent = document.lastModified;
});

// Animated visitor counter
const counter = document.querySelector(".counter");
if (counter) {
  let count = 87654;
    setInterval(() => {
    count++;
    counter.textContent = count.toString().padStart(8, "0");
  }, 3000);
}

// Button hover effects
const buttons = document.querySelectorAll(".ticket-button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.borderStyle = "inset";
    });
    button.addEventListener("mouseleave", () => {
      button.style.borderStyle = "outset";
    });
  });

  // Mobile menu toggle would go here in a real implementation

