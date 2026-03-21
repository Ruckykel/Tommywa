import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Vertical text — left side */}
            <div className={styles.verticalTextLeft}>
                <span>Video editor</span>
            </div>

            {/* Year — bottom left */}
            <div className={styles.verticalTextYear}>
                <span>2025</span>
            </div>

            {/* Main content */}
            <div className={styles.content}>
                {/* Left column */}
                <div className={styles.leftCol}>
                    {/* Stats */}
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>+5</span>
                            <span className={styles.statLabel}>Years of experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>+50</span>
                            <span className={styles.statLabel}>Projects completed</span>
                        </div>
                    </div>

                    {/* Hello Heading */}
                    <div className={styles.headingBlock}>
                        <h1 className={styles.heroHeading}>Hello</h1>
                        <p className={styles.heroSubtitle}>
                            — It&apos;s Tomiwa, a video editing wizard
                        </p>
                    </div>
                </div>

                {/* Right column — Portrait */}
                <div className={styles.rightCol}>
                    <div className={styles.portraitWrapper}>
                        <Image
                            src="/images/tommyhero.png"
                            alt="Tomiwa Ashade — Video Editor"
                            width={700}
                            height={850}
                            priority
                            className={styles.portrait}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <span>Scroll down</span>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 1V11M6 11L1 6M6 11L11 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
}
