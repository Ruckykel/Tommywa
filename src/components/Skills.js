import styles from "./Skills.module.css";

const skills = [
    {
        id: 1,
        category: "EDITING SOFTWARE",
        title: "Adobe Premiere Pro, After Effects & DaVinci Resolve",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        id: 2,
        category: "COLOR GRADING",
        title: "Lumetri Color, DaVinci Resolve Color Correction & Grading",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
        ),
    },
    {
        id: 3,
        category: "VFX & MOTION",
        title: "Basic VFX cleanup — glow, masking, motion tracking & animation",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
];

export default function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.label}>● Skills</span>
                    <h2 className={styles.heading}>Tools & Expertise</h2>
                </div>

                {/* Skills Grid */}
                <div className={styles.grid}>
                    {skills.map((skill) => (
                        <div key={skill.id} className={styles.card}>
                            <div className={styles.iconWrapper}>{skill.icon}</div>
                            <div className={styles.cardBody}>
                                <span className={styles.category}>{skill.category}</span>
                                <h3 className={styles.skillTitle}>{skill.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className={styles.education}>
                    <div className={styles.eduLeft}>
                        <span className={styles.label}>● Education</span>
                        <h3 className={styles.eduTitle}>B.Sc. Film Production</h3>
                        <p className={styles.eduDetail}>
                            National Open University of Nigeria
                        </p>
                        <p className={styles.eduDetail}>Expected Graduation: 2027</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
