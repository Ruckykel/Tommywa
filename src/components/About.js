import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                {/* ---- Left Column ---- */}
                <div className={styles.leftCol}>
                    <h2 className={styles.heading}>About Me</h2>
                    <p className={styles.description}>
                        Creative Video Editor with over five years of experience crafting
                        compelling visual stories through purposeful and refined editing.
                        Skilled in transforming raw footage into engaging, high-impact
                        content that connects with audiences and leaves a lasting
                        impression. Ready to start your next project?
                    </p>

                    {/* Curved arrow */}
                    <div className={styles.curvedArrow} aria-hidden="true">
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 40C10 40 20 10 50 20C80 30 60 60 70 65"
                                stroke="var(--text-muted)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <path
                                d="M62 62L70 65L67 56"
                                stroke="var(--text-muted)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                </div>

                {/* ---- Center Column ---- */}
                <div className={styles.centerCol}>
                    {/* Stat card */}
                    <div className={styles.statCard}>
                        <div className={styles.globeIcon}>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                        </div>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>
                            Client satisfaction rate across all video editing projects
                        </span>
                    </div>

                    {/* Portrait photo */}
                    <div className={styles.centerPhoto}>
                        <Image
                            src="/images/tommy2.png"
                            alt="Tomiwa Ashade — About"
                            width={340}
                            height={420}
                            className={styles.photoImage}
                        />
                    </div>
                </div>

                {/* ---- Right Column ---- */}
                <div className={styles.rightCol}>
                    {/* Small portrait with arrow */}
                    <div className={styles.smallPortrait}>
                        <Image
                            src="/images/tommy3.png"
                            alt="Tomiwa portrait"
                            width={120}
                            height={120}
                            className={styles.smallPortraitImg}
                        />
                        <div className={styles.arrowBadge} aria-hidden="true">
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
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Info blocks */}
                    <div className={styles.infoBlocks}>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoIcon}>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className={styles.infoText}>
                                Influenced by film and digital design, I combine strong visual
                                storytelling with clean, intentional editing to produce seamless
                                and visually compelling results.
                            </p>
                        </div>

                        <div className={styles.infoBlock}>
                            <div className={styles.infoIcon}>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 5V11M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className={styles.infoText}>
                                Experienced in working across multiple editing platforms, with a
                                keen eye for detail, smooth visual flow, and creative techniques
                                that elevate every project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
