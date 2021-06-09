import React, { useEffect } from 'react';

function NavComponent () {
    useEffect(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelectorAll('.nav__item');
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        });
    });

    return (
        <div>
            <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger">
                        <i className="fas fa-bars nav-toggle__open"></i>
                        <i className="fas fa-times nav-toggle__close"></i>
                    </span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                What I Do
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                About me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                My Blogs
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#get-in-touch" className="nav__link">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}

export default NavComponent;