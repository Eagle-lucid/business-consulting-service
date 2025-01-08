// Import assets
import './testimonial.css';
import ethanWilliams from './assets/images/Ethan-Williams.jpg';
import jamesAnderson from './assets/images/James-Anderson.jpg';
import michealRoberts from './assets/images/Micheal-Roberts.jpg';
import oliviaMathew from './assets/images/Olivia-Mathews.jpg';
import sophiaCarter from './assets/images/Sophia-Carter.jpg';
import alexanderJohnson from './assets/images/Alexander-Johnson.jpg';
import bgVideoMp4 from './assets/videos/bg-video.mp4';
import bgFallbackImage from './assets/images/fallback.jpg';

// Testimonials array
const testimonials = [
  {
    name: 'Ethan Williams',
    title: 'CEO, Tech Innovations Inc.',
    testimonial:
      '“Lucid Clarity transformed our business strategies and helped us expand globally. Their insights are invaluable.”',
    photo: ethanWilliams,
  },
  {
    name: 'James Anderson',
    title: 'Founder, NextGen Enterprises',
    testimonial:
      '“The team at Lucid Clarity not only provided clear guidance, but they also helped us innovate our approach, leading to unprecedented growth.”',
    photo: jamesAnderson,
  },
  {
    name: 'Olivia Matthews',
    title: 'Marketing Director, Global Insights Ltd.',
    testimonial:
      '“Lucid Clarity\'s strategies have been a game-changer for us. Their focus on results has driven our digital transformation to new heights.”',
    photo: oliviaMathew,
  },
  {
    name: 'Michael Roberts',
    title: 'CFO, Future Ventures LLC',
    testimonial:
      '“Lucid Clarity\'s comprehensive market insights and data-driven strategies have given us a competitive edge in the financial sector.”',
    photo: michealRoberts,
  },
  {
    name: 'Sophia Carter',
    title: 'COO, Green Solutions Inc.',
    testimonial:
      '“Working with Lucid Clarity has allowed us to create sustainable business practices that align with our vision for a greener future.”',
    photo: sophiaCarter,
  },
  {
    name: 'Alexander Johnson',
    title: 'Founder, Digital Frontiers',
    testimonial:
      '“Lucid Clarity helped us refine our digital transformation strategy, and their team was pivotal in optimizing our operations for long-term success.”',
    photo: alexanderJohnson,
  },
];

// Generate testimonials section
function testimonialSectionContent() {
  const testimonialSection = document.getElementById('testimonialSection');

  const testimonialCards = testimonials
    .map(
      (testimonial) => `
      <div class="testimonial-card">
        <div class="testimonial-photo">
          <img src="${testimonial.photo}" alt="${testimonial.name}" loading="lazy" />
        </div>
        <div class="testimonial-content">
          <p class="testimonial-quote">${testimonial.testimonial}</p>
          <p class="testimonial-name">- ${testimonial.name}</p>
          <p class="testimonial-title">${testimonial.title}</p>
        </div>
      </div>`
    )
    .join('');

  const testimonialContent = `
    <div class="testimonial-content">
      <div class="testimonial-header">
        <h3>What Our Clients Say</h3>
        <p>Our clients trust us to deliver results. Here's what they have to say about our services:</p>
      </div>
      <div class="testimonial-carousel-wrapper">
        <div class="carousel-video-background">
          <video autoplay loop muted playsinline class="carousel-background-video">
            <source src="${bgVideoMp4}" type="video/mp4" />
            <img src="${bgFallbackImage}" alt="Background Fallback" />
          </video>
        </div>
        <div class="carousel-overlay">
          <button id="prev" class="carousel-button" aria-label="Previous">&lt;</button>
          <div class="carousel-container">
            ${testimonialCards}
          </div>
          <button id="next" class="carousel-button" aria-label="Next">&gt;</button>
          <div class="carousel-dots"></div>
        </div>
      </div>
    </div>`;

  testimonialSection.innerHTML = testimonialContent;
  initCarousel();
}

// Carousel functionality
function initCarousel() {
  const container = document.querySelector('.carousel-container');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const dotsContainer = document.querySelector('.carousel-dots');

  let currentIndex = 0;
  let isAnimating = false;

  // Generate dots for navigation
  dotsContainer.innerHTML = testimonials
    .map((_, index) => `<button class="dot" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join('');
  const dots = dotsContainer.querySelectorAll('.dot');

  // Update carousel position and active dot
  function updateCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    const cardWidth = cards[0].offsetWidth + 20; // Adjust for margins
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  // Navigation button handlers
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Dot navigation
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index, 10);
      if (index !== currentIndex) {
        currentIndex = index;
        updateCarousel();
      }
    });
  });

  // Auto-scroll functionality
  let autoScrollTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 5000);

  // Pause auto-scroll on interaction
  [prevButton, nextButton, dotsContainer].forEach((element) => {
    element.addEventListener('mouseenter', () => clearInterval(autoScrollTimer));
    element.addEventListener('mouseleave', () => {
      autoScrollTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
      }, 5000);
    });
  });

  // Initialize carousel
  updateCarousel();
}

// Export function
export default testimonialSectionContent;

