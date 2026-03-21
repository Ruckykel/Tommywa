"use client";

import styles from "./Portfolio.module.css";

const projects = [
    {
        id: 1,
        title: "Concert Highlight Reel",
        client: "Beat N Feet",
        video: "/videos/video1.mp4",
    },
    {
        id: 2,
        title: "App Launch Promo",
        client: "Filling App",
        video: "/videos/video2.mp4",
        featured: true,
    },
    {
        id: 3,
        title: "Worship Service Edit",
        client: "Calvary Bible Church",
        video: "/videos/video3.mp4",
    },
    {
        id: 4,
        title: "Behind the Scenes",
        client: "Freelance",
        video: "/videos/video4.mp4",
    },
    {
        id: 5,
        title: "Event Recap Video",
        client: "Beat N Feet",
        video: "/videos/video5.mp4",
        featured: true,
    },
    {
        id: 6,
        title: "Motion Graphics Reel",
        client: "Freelance",
        video: "/videos/video6.mp4",
    },
    {
        id: 7,
        title: "Promotional Content",
        client: "Filling App",
        video: "/videos/video7.mp4",
    },
    {
        id: 8,
        title: "Creative Short",
        client: "Freelance",
        video: "/videos/newvideo.MP4",
        featured: true,
    },
];

export default function Portfolio() {
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.label}>● Portfolio</span>
                    <h2 className={styles.heading}>Latest Works</h2>
                </div>

                {/* Projects Grid — Top row (4) */}
                <div className={styles.gridTop}>
                    {projects.slice(0, 4).map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.videoWrapper}>
                                <video
                                    src={project.video}
                                    className={styles.video}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => e.target.play()}
                                    onMouseLeave={(e) => {
                                        e.target.pause();
                                        e.target.currentTime = 0;
                                    }}
                                />
                                {/* Play icon overlay */}
                                <div className={styles.playOverlay}>
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.5)" />
                                        <path d="M14 11L26 18L14 25V11Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <span className={styles.projectClient}>
                                    For{" "}
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ display: "inline", verticalAlign: "middle" }}
                                    >
                                        <polygon
                                            points="5,0 6.5,3.5 10,4 7.5,6.5 8,10 5,8.5 2,10 2.5,6.5 0,4 3.5,3.5"
                                            fill="currentColor"
                                        />
                                    </svg>{" "}
                                    <strong>{project.client}</strong>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Grid — Bottom row (4) */}
                <div className={styles.gridBottom}>
                    {projects.slice(4).map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.videoWrapper}>
                                <video
                                    src={project.video}
                                    className={styles.video}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => e.target.play()}
                                    onMouseLeave={(e) => {
                                        e.target.pause();
                                        e.target.currentTime = 0;
                                    }}
                                />
                                <div className={styles.playOverlay}>
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.5)" />
                                        <path d="M14 11L26 18L14 25V11Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <span className={styles.projectClient}>
                                    For{" "}
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ display: "inline", verticalAlign: "middle" }}
                                    >
                                        <polygon
                                            points="5,0 6.5,3.5 10,4 7.5,6.5 8,10 5,8.5 2,10 2.5,6.5 0,4 3.5,3.5"
                                            fill="currentColor"
                                        />
                                    </svg>{" "}
                                    <strong>{project.client}</strong>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
