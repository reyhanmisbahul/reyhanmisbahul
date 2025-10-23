class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(13, 13, 26, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(108, 99, 255, 0.1);
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    background: linear-gradient(to right, #6C63FF, #00C9FF);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                
                ul {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s;
                }
                
                a:hover {
                    color: #6C63FF;
                }
                
                a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(to right, #6C63FF, #00C9FF);
                    transition: width 0.3s;
                }
                
                a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    ul {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(13, 13, 26, 0.95);
                        padding: 1rem;
                        gap: 1rem;
                    }
                    
                    ul.show {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="#home" class="logo">Reyhan Misbahul</a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        `;
        
        // Add mobile menu functionality
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const menu = this.shadowRoot.querySelector('ul');
        
        mobileMenuBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);