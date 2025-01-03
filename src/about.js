import './about.css';

function aboutSectionContent () {
    const aboutSection = document.getElementById('aboutSection');

    // Content for about section
    const aboutContent = `
        <div class="about-content">
            <div class="fade-in-left">
            <h2>About Lucid Clarity</h2>
            <p>At <strong>Lucid Clarity Consulting</strong>, we specialize in providing tailored strategies and bold solutions that empower businesses to achieve measurable success. Our team of experts combines years of experience with cutting-edge insights to ensure your business thrives in a competitive market.</p>
            
            <div class="mission-vision">
                <div class="mission fade-in-left">
                    <h3>Our Mission</h3>
                    <p>To empower businesses with actionable strategies that drive growth, inspire innovation, and create lasting impact.</p>
                </div>
            </div>
                <div class="vision fade-in-right">
                    <h3>Our Vision</h3>
                    <p>To be the go-to consulting firm known for unlocking clarity and transforming businesses worldwide.</p>
                </div>
            
            <div class="core-values fade-in-left">
                <h3>Our Core Values</h3>
                <ul>
                    <li><strong>Innovation:</strong> Embracing creativity to deliver cutting-edge solutions.</li>
                    <li><strong>Trust:</strong> Building strong relationships through honesty and transparency.</li>
                    <li><strong>Results:</strong> Driving measurable success for every client.</li>
                </ul>
            </div>
                </div>
            
            <div class="cta-section fade-in-up">
                <h3>Stay Updated</h3>
                <p>Want to learn more about us and stay updated with the latest insights? Subscribe to our newsletter!</p>
                <form id="subscription-form" class="subscription-form">
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                    <button type="submit" class="cta-button" aria-label="Subscribe to Newsletter">Subscribe</button>
                </form>
                <p id="subscription-message" class="subscription-message"></p>
            </div>
        </div>
    `;

    // Inject the content into about section
    aboutSection.innerHTML = aboutContent;

      // Intersection Observer to handle animations
      const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');

      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.2 });
  
      fadeElements.forEach((el) => observer.observe(el));
  

    // Email subscription logic
    const subscriptionForm = document.getElementById('subscription-form');
    const subscriptionMessage = document.getElementById('subscription-message');
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
    
        if (validateEmail(email)) {
            subscriptionMessage.textContent = 'Thank you for subscribing! We will keep you updated.';
            subscriptionMessage.style.color = 'green';
            subscriptionForm.reset();
        } else {
            subscriptionMessage.textContent = 'Please enter a valid email address.';
            subscriptionMessage.style.color = 'red';
        }
    });
}

export default aboutSectionContent;
