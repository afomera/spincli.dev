// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                const match = text.includes(searchTerm);
                section.style.display = searchTerm.length > 2 ? (match ? 'block' : 'none') : 'block';
            });
        });
    }
});

// Add copy buttons to code blocks
document.querySelectorAll('pre').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    
    block.style.position = 'relative';
    block.appendChild(button);
    
    button.addEventListener('click', async () => {
        const code = block.textContent.replace('Copy', '');
        try {
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Failed';
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Add last updated date
const lastUpdated = document.querySelector('.last-updated');
if (lastUpdated) {
    lastUpdated.textContent = `Last updated: ${new Date().toLocaleDateString()}`;
}

// Previous/Next navigation
const setupPrevNext = () => {
    const pages = ['installation.html', 'commands.html', 'configuration.html', 'workflow.html'];
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = pages.indexOf(currentPage);
    
    const prevNext = document.querySelector('.prev-next-nav');
    if (prevNext && currentIndex !== -1) {
        if (currentIndex > 0) {
            const prev = document.createElement('a');
            prev.href = pages[currentIndex - 1];
            prev.className = 'prev-link';
            prev.textContent = '← Previous';
            prevNext.appendChild(prev);
        }
        
        if (currentIndex < pages.length - 1) {
            const next = document.createElement('a');
            next.href = pages[currentIndex + 1];
            next.className = 'next-link';
            next.textContent = 'Next →';
            prevNext.appendChild(next);
        }
    }
};
