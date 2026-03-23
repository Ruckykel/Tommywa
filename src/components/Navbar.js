"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <header className={styles.header} id="navbar">
            <nav className={styles.nav}>
                {/* Logo */}
                <a href="#" className={styles.logo} aria-label="Home">
                    <Image
                        src="/images/tommylogo.PNG"
                        alt="Tomiwa Ashade Logo"
                        width={85}
                        height={85}
                        className={styles.logoImg}
                        priority
                    />
                </a>

                {/* Nav Links */}
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#about" className={styles.navLink}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className={styles.navLink}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className={styles.navLink}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className={styles.navLink}>
                            Skills
                        </a>
                    </li>
                </ul>

                {/* CTA */}
                <a href="#contact" className={styles.cta} id="navbar-cta">
                    Book A Call
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 13L13 1M13 1H3M13 1V11"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.menuOpenBtn : ""}`}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <ul className={styles.mobileNavLinks}>
                    <li><a href="#about" onClick={closeMenu}>About Me</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={closeMenu} className={styles.mobileCta}>Book A Call</a></li>
                </ul>
            </div>
        </header>
    );
}
