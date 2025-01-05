// Import testimonial.css & images
import './testimonial.css';
import ethanWilliams from './assets/images/Ethan-Williams.jpg';
import jamesAnderson from './assets/images/James-Anderson.jpg';
import michealRoberts from './assets/images/Micheal-Roberts.jpg';
import oliviaMathew from './assets/images/Olivia-Mathews.jpg';
import sophiaCarter from './assets/images/Sophia-Carter.jpg';
import alexanderJohnson from './assets/images/Alexander-Johnson.jpg';

// Array for testimonial 
const testimonials = [
    {
        name: 'Ethan Williams',
        title: 'CEO, Tech Innovations Inc.',
        testimonial: '“Lucid Clarity transformed our business strategies and helped us expand globally. Their insights are invaluable.”',
        photo: ethanWilliams,
    },
    {
        name: 'James Anderson',
        title: 'Founder, NextGen Enterprises',
        testimonial: '“The team at Lucid Clarity not only provided clear guidance, but they also helped us innovate our approach, leading to unprecedented growth.”',
        photo: jamesAnderson,
    },
    {
        name: 'Olivia Matthews',
        title: 'Marketing Director, Global Insights Ltd.',
        testimonial: '“Lucid Clarity\'s strategies have been a game-changer for us. Their focus on results has driven our digital transformation to new heights.”',
        photo: oliviaMathew,
    },
    {
        name: 'Michael Roberts',
        title: 'CFO, Future Ventures LLC',
        testimonial: '“Lucid Clarity\'s comprehensive market insights and data-driven strategies have given us a competitive edge in the financial sector.”',
        photo: michealRoberts,
    },
    {
        name: 'Sophia Carter',
        title: 'COO, Green Solutions Inc.',
        testimonial: '“Working with Lucid Clarity has allowed us to create sustainable business practices that align with our vision for a greener future.”',
        photo: sophiaCarter,
    },
    {
        name: 'Alexander Johnson',
        title: 'Founder, Digital Frontiers',
        testimonial: '“Lucid Clarity helped us refine our digital transformation strategy, and their team was pivotal in optimizing our operations for long-term success.”',
        photo: alexanderJohnson,
    },
];

// Function for testimonial
function testimonialSectionContent() {
    const testimonialSection = document.getElementById('testimonialSection');
    
    const testimonialCards = testimonials
        .map(
            (testimonial) => `
            <div class="testimonial-card">
                <div class="testimonial-photo">
                    <img src="${testimonial.photo}" alt="${testimonial.name}" />
                </div>
                <div class="testimonial-content">
                    <p class="testimonial-quote">"${testimonial.testimonial}"</p>
                    <p class="testimonial-name">- ${testimonial.name}</p>
                    <p class="testimonial-title">${testimonial.title}</p>
                </div>
            </div>
            `
        )
        .join('');
    
    const testimonialContent = `
    <div class="testimonial-content">
        <div class="testimonial-header">
            <h3>What Our Clients Say</h3>
            <p>Our clients trust us to deliver results. Here's what they have to say about our services:</p>
        </div>
        <div class="testimonial-carousel">
        <button id="prev" class="carousel-button"><</button>
        <div class="carousel-container">
            ${testimonialCards}
        </div>
        <button id="next" class="carousel-button">></button>
        </div>
    </div>
    `;
    
    testimonialSection.innerHTML = testimonialContent;
}

export default testimonialSectionContent;