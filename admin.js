document.addEventListener('DOMContentLoaded', () => {
    // Login functionality
    const loginForm = document.getElementById('adminLoginForm');
    const loginSection = document.getElementById('admin-login');
    const dashboardSection = document.getElementById('admin-dashboard');
    
    // Portfolio data (in a real app, this would be stored on a server)
    let portfolioItems = [
        { id: 1, title: 'Project 1', image: '', description: 'Project 1 description' },
        { id: 2, title: 'Project 2', image: '', description: 'Project 2 description' },
        { id: 3, title: 'Project 3', image: '', description: 'Project 3 description' },
        { id: 4, title: 'Project 4', image: '', description: 'Project 4 description' },
        { id: 5, title: 'Project 5', image: '', description: 'Project 5 description' }
    ];
    
    // Check if user is already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        showDashboard();
    }
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check credentials (username: afnansyed56#, password: password)
        if (username === 'afnansyed56#' && password === 'password') {
            localStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Invalid username or password!');
        }
    });
    
    function showDashboard() {
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        renderPortfolioItems();
    }
    
    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('adminLoggedIn');
        loginSection.style.display = 'block';
        dashboardSection.style.display = 'none';
    });
    
    // Portfolio management
    document.getElementById('portfolioForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('projectTitle').value;
        const image = document.getElementById('projectImage').value;
        const description = document.getElementById('projectDescription').value;
        
        if (title) {
            const newItem = {
                id: Date.now(),
                title,
                image,
                description
            };
            
            portfolioItems.push(newItem);
            renderPortfolioItems();
            
            // Reset form
            document.getElementById('portfolioForm').reset();
            alert('Project added successfully!');
        }
    });
    
    function renderPortfolioItems() {
        const container = document.getElementById('portfolioItems');
        container.innerHTML = '';
        
        portfolioItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'portfolio-item-card';
            itemElement.innerHTML = `
                <h4>${item.title}</h4>
                ${item.image ? `<img src="${item.image}" alt="${item.title}" style="max-width: 100%; height: auto;">` : '<div class="placeholder-image">No Image</div>'}
                <p>${item.description}</p>
                <button class="delete-btn" data-id="${item.id}">Delete</button>
            `;
            container.appendChild(itemElement);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                portfolioItems = portfolioItems.filter(item => item.id !== id);
                renderPortfolioItems();
            });
        });
    }
});