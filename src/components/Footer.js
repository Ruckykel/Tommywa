import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            {/* Grid background pattern */}
            <div className={styles.gridPattern} aria-hidden="true">
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
                <div className={styles.gridCell}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left — Nav Links */}
                    <nav className={styles.nav} aria-label="Footer navigation">
                        <a href="#hero" className={styles.navLinkActive}>
                            Home
                        </a>
                        <a href="#about" className={styles.navLink}>
                            About Me
                        </a>
                        <a href="#portfolio" className={styles.navLink}>
                            Portfolio
                        </a>
                        <a href="#experience" className={styles.navLink}>
                            Experience
                        </a>
                        <a href="#skills" className={styles.navLink}>
                            Skills
                        </a>
                    </nav>

                    {/* Right — Contact Info */}
                    <div className={styles.rightCol}>
                        <a href="mailto:tommywaashade7@gmail.com" className={styles.email}>
                            tommywaashade7@gmail.com
                        </a>
                        <div className={styles.socialRow}>
                            <a
                                href="https://wa.me/2349074458447"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="WhatsApp"
                            >
                                WhatsApp
                            </a>
                            <span className={styles.dot}>·</span>
                            <a
                                href="https://instagram.com/tommycam_7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>
                            <span className={styles.dot}>·</span>
                            <a
                                href="https://tiktok.com/@tommycam_7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="TikTok"
                            >
                                TikTok
                            </a>
                            <span className={styles.dot}>·</span>
                            <a
                                href="tel:+2349074458447"
                                className={styles.socialLink}
                                aria-label="Phone"
                            >
                                +234 907 445 8447
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
