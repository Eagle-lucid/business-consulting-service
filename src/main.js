// Import CSS & JS files
import './main.css';
import aboutSectionContent from "./about.js";
import serviceSectionContent from "./service.js";
import testimonialSectionContent from "./testimonial.js";

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize content for sections
  aboutSectionContent();
  serviceSectionContent();
  testimonialSectionContent();

  // Add event listeners for smooth scrolling
  const scrollButtons = document.querySelectorAll("button[data-scroll-target]");

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get target section ID and scroll to it
      const targetId = button.getAttribute("data-scroll-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`No section found with ID "${targetId}"`);
      }
    });
  });
});

 