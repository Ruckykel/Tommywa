import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header} id="navbar">
            <nav className={styles.nav}>
                {/* Logo */}
                <a href="#" className={styles.logo} aria-label="Home">
                    <Image
                        src="/images/tommylogo.PNG"
                        alt="Tomiwa Ashade Logo"
                        width={40}
                        height={40}
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
                <button className={styles.mobileMenuBtn} aria-label="Toggle menu" id="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
}
