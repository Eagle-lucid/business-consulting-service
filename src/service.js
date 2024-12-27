// Import service css
import './service.css';

    // Array of services
    const services = [
        {
            icon: 'assets/icons/ideas.png',
            title: 'Business Consultation',
            description: 'Expert advice to align your business goals with actionable strategies for success.',
        },
        {
            icon: 'assets/icons/line-chart.png',
            title: 'Data-Driven Market Intelligence',
            description: 'Leverage insights and analytics to make informed decisions and stay ahead of trends.',
        },
        {
            icon: 'assets/icons/engineering.png',
            title: 'Digital Transformation Consulting',
            description: 'Empower your business to adapt and thrive in a rapidly evolving digital landscape.',
        },
        {
            icon: 'assets/icons/leaf.png',
            title: 'Sustainability & Green Business Strategy',
            description: 'Create eco-friendly strategies that drive growth while respecting the environment.',
        },
        {
            icon: 'assets/icons/paintbrush.png',
            title: 'Branding for the Digital Age',
            description: 'Build a modern brand identity that resonates across digital platforms and audiences.',
        },
        {
            icon: 'assets/icons/startup.png',
            title: 'Innovation & Product Development',
            description: 'Foster creativity to develop groundbreaking products and solutions for your market.',
        },
        {
            icon: 'assets/icons/community.png',
            title: 'Diversity, Equity & Inclusion (DEI) Strategy',
            description: 'Promote an inclusive culture that embraces diversity and drives team success.',
        },
        {
            icon: 'assets/icons/shield.png',
            title: 'Crisis Management & Business Continuity Planning',
            description: 'Prepare and navigate through challenges with tailored risk management strategies.',
        },
        
    ];

// Function for serviceSection
function serviceSectionContent () {
    const serviceSection = document.getElementById('serviceSection');
    
    const serviceCards = services
    .map (
        (service) => `
        <div class="service-card">
        <img src="${service.icon}" alt="${service.title} Icon" class="service-icon" />
        <h4>${service.title}</h4>
        <p>${service.description}</p>
        </div>
        `
    )
    .join('');

    const serviceContent = `
    <div class="service-content">
        <h3>Our Services</h3>
        <p>Explore our comprehensive range of services designed to elevate your business to new heights.</p>
        <div class="services-list">
            ${serviceCards}
        </div>
    </div>
`;
    serviceSection.innerHTML = serviceContent;
}
export default serviceSectionContent;