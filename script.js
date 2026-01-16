const particlesContainer = document.getElementById('particles');
const colors = ['#3b82f6', '#ef4444', '#22c55e', '#eab308'];
const sizes = [6, 8, 10, 12];

for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = sizes[Math.floor(Math.random() * sizes.length)] + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

const navLink = document.querySelectorAll(".nav-links");
const currentPage = window.location.pathname.split("/").pop();

navLink.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
});

// Data Tools
const tools = [
  { name: 'Python', icon: 'assets/icon/python.svg' },
  { name: 'C++', icon: 'assets/icon/cpp.svg' },
  { name: 'JavaScript', icon: 'assets/icon/javascript.svg' },
  { name: 'CSS', icon: 'assets/icon/css.svg' },
  { name: 'HTML', icon: 'assets/icon/html.svg' },
  { name: 'Tailwind', icon: 'assets/icon/tailwind.svg' },
  { name: 'PHP', icon: 'assets/icon/php.svg' },
  { name: 'MySQL', icon: 'assets/icon/mysql.svg' },
  { name: 'Git', icon: 'assets/icon/git.svg' }
];

        // Data Projects
        const projects = [
            {
                id: 1,
                title: 'COSMOS: The Internet of Blockchains',
                imageTitle: 'The Internet of Blockchains.',
                description: 'Cosmos is a wonderful illustration of Web3 website design trends like vivid gradients, 3D features, and sci-fi themes that we\'ve been seeing across the sector.',
                gradient: 'project-gradient-1',
                link: '#'
            },
            {
                id: 2,
                title: 'The Privacy Platform for web3',
                imageTitle: 'The Privacy Platform for web3',
                description: 'Cosmos is a wonderful illustration of Web3 website design trends like vivid gradients, 3D features, and sci-fi themes that we\'ve been seeing across the sector.',
                gradient: 'project-gradient-2',
                link: '#'
            },
            {
                id: 3,
                title: 'DeFi Trading Platform',
                imageTitle: 'DeFi Platform',
                description: 'A comprehensive DeFi platform showcasing modern Web3 design with interactive charts, real-time data, and seamless user experience for crypto trading.',
                gradient: 'project-gradient-3',
                link: '#'
            },
            {
                id: 4,
                title: 'NFT Marketplace',
                imageTitle: 'NFT Marketplace',
                description: 'An innovative NFT marketplace featuring stunning visual effects, smooth animations, and an intuitive interface for digital art collectors and creators.',
                gradient: 'project-gradient-4',
                link: '#'
            }
        ];

        // Generate Tools (duplicate untuk infinite scroll)
function generateTools() {
    const toolsWrapper = document.getElementById('toolsWrapper');

    const toolsHTML = tools.map(tool => `
        <div class="tool-item">
            <div class="tool-icon">
                <img src="${tool.icon}" alt="${tool.name}">
            </div>
            <div class="tool-name">${tool.name}</div>
        </div>
    `).join('');

    // Duplicate untuk infinite scroll
    toolsWrapper.innerHTML = toolsHTML + toolsHTML;
}


        // Generate Projects
        function generateProjects() {
            const projectsGrid = document.getElementById('projectsGrid');
            projectsGrid.innerHTML = projects.map(project => `
                <div class="project-card">
                    <div class="project-image ${project.gradient}">
                        <div class="project-image-title">${project.imageTitle}</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.link}" class="project-button">View Detail</a>
                    </div>
                </div>
            `).join('');
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            generateTools();
            generateProjects();
        });