class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #0D0D1A;
                    color: white;
                    padding: 3rem 1.5rem;
                    text-align: center;
                    border-top: 1px solid rgba(108, 99, 255, 0.1);
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .social-links a {
                    color: #6C63FF;
                    font-size: 1.5rem;
                    transition: color 0.3s;
                }
                
                .social-links a:hover {
                    color: #00C9FF;
                }
                
                .copyright {
                    margin-top: 1.5rem;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                }
                
                .back-to-top {
                    display: inline-block;
                    margin-top: 1.5rem;
                    color: #6C63FF;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .back-to-top:hover {
                    color: #00C9FF;
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <div class="social-links">
                        <a href="#"><i data-feather="github"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                    </div>
                    
                    <p class="copyright">
                        &copy; ${new Date().getFullYear()} Reyhan Misbahul. All rights reserved.
                    </p>
                    
                    <a href="#home" class="back-to-top">
                        <i data-feather="arrow-up"></i> Back to Top
                    </a>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);