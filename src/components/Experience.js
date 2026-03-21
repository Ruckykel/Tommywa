import Image from "next/image";
import styles from "./Experience.module.css";

const experiences = [
    {
        id: 1,
        company: "Beat N Feet Concert, Freelance",
        role: "Video Editor / Content Creator",
        period: "November 2025 - December 2025",
        description:
            "Filmed live performances and behind-the-scenes content. Edited concert footage into engaging highlight videos and promotional content.",
        tags: ["Premiere Pro", "Color Grading"],
    },
    {
        id: 2,
        company: "Filling — Fuel Service App",
        role: "Video Editor & Motion Graphics Assistant",
        period: "April 2025 - May 2025",
        description:
            "Supported the lead editor throughout post-production for a fuel-service mobile app launch video. Animated the company logo and developed motion elements.",
        tags: ["After Effects", "Motion Graphics"],
    },
    {
        id: 3,
        company: "Calvary Bible Church",
        role: "Video Editor / Media Team",
        period: "August 2021 - Present",
        description:
            "Shoot and edit video content for social media platforms, promotional materials, and internal communications. Capture worship highlights, sermons, and special events.",
        tags: ["Video Editing", "Sound Mixing"],
        expanded: true,
        images: [
            "/images/exp-thumb-1.png",
            "/images/exp-thumb-2.png",
            "/images/exp-thumb-3.png",
        ],
        expandedDescription:
            "From filming live worship services to crafting promotional campaigns, this ongoing role has shaped my creative approach — blending color correction, sound mixing, and motion graphics to improve viewer engagement across all platforms.",
    },
];

export default function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.label}>● Experience</span>
                        <h2 className={styles.heading}>
                            Explore My Editing
                            <br />
                            Journey
                        </h2>
                    </div>
                    <div className={styles.headerRight}>
                        <p className={styles.headerDescription}>
                            Over the past 5+ years, I&apos;ve had the opportunity to work on a
                            wide range of video projects, collaborating with diverse teams and
                            clients to bring creative visions to life through compelling
                            visual storytelling.
                        </p>
                        <a href="#contact" className={styles.bookCall}>
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
                    </div>
                </div>

                {/* Experience List */}
                <div className={styles.list}>
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className={`${styles.item} ${exp.expanded ? styles.itemExpanded : ""}`}
                        >
                            {/* Top row */}
                            <div className={styles.itemRow}>
                                <div className={styles.itemLeft}>
                                    <h3 className={styles.company}>{exp.company}</h3>
                                    <span className={styles.period}>• {exp.period}</span>
                                </div>
                                {!exp.expanded && (
                                    <p className={styles.itemDescription}>{exp.description}</p>
                                )}
                                <div className={styles.tags}>
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Expanded content */}
                            {exp.expanded && (
                                <div className={styles.expandedContent}>
                                    <div className={styles.thumbs}>
                                        {exp.images.map((img, idx) => (
                                            <div key={idx} className={styles.thumb}>
                                                <Image
                                                    src={img}
                                                    alt={`${exp.company} project ${idx + 1}`}
                                                    width={160}
                                                    height={140}
                                                    className={styles.thumbImage}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.expandedRight}>
                                        <p className={styles.expandedDescription}>
                                            {exp.expandedDescription}
                                        </p>
                                        <a href="#portfolio" className={styles.arrowBtn} aria-label="View portfolio">
                                            <svg
                                                width="18"
                                                height="18"
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
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
