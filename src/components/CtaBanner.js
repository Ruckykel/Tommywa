import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
    return (
        <section className={styles.ctaBanner} id="cta-banner">
            <div className={styles.container}>
                <div className={styles.bannerWrapper}>
                    {/* Background image */}
                    <div
                        className={styles.bgImage}
                        style={{ backgroundImage: "url(/images/cta-banner-bg.png)" }}
                        aria-hidden="true"
                    />
                    {/* Overlay */}
                    <div className={styles.overlay} />

                    {/* Content */}
                    <div className={styles.content}>
                        <span className={styles.label}>
                            (Book Your Free Consultation Now!)
                        </span>
                        <h2 className={styles.heading}>
                            Need a Video Editor? Let&apos;s Create
                            <br />
                            Something Amazing Together!
                        </h2>
                        <p className={styles.description}>
                            Take advantage of this offer to discuss your video editing
                            needs with an experienced editor skilled in Premiere Pro,
                            After Effects, and DaVinci Resolve.
                        </p>
                        <a href="mailto:tommywaashade7@gmail.com" className={styles.cta}>
                            Let&apos;s talk
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
                    </div>
                </div>
            </div>
        </section>
    );
}
