"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Portfolio.module.css";

const projects = [
    {
        id: 1,
        title: "GTCO Fashion Week",
        client: "Beat N Feet",
        video: "/videos/video1.mp4",
    },
    {
        id: 2,
        title: "Brand Highlight",
        client: "Filling App",
        video: "/videos/video2.mp4",
        featured: true,
    },
    {
        id: 3,
        title: "Gym Edit For Reels",
        client: "Calvary Bible Church",
        video: "/videos/video3.mp4",
    },
    {
        id: 4,
        title: "Worship Highlight",
        client: "Freelance",
        video: "/videos/video4.mp4",
    },
    {
        id: 5,
        title: "Wedding Highlight",
        client: "Beat N Feet",
        video: "/videos/video5.mp4",
        featured: true,
    },
    {
        id: 6,
        title: "Beat N Feet Highlight For Reels",
        client: "Freelance",
        video: "/videos/video6.mp4",
    },
    {
        id: 7,
        title: "Promotion Content For Reels",
        client: "Filling App",
        video: "/videos/video7.mp4",
    },
    {
        id: 8,
        title: "Promotion Content For Reels",
        client: "Freelance",
        video: "/videos/newvideo.MP4",
        featured: true,
    },
];

function VideoCard({ project }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth <= 768) {
                    if (entry.isIntersecting) {
                        videoRef.current?.play().catch(() => { });
                        setIsPlaying(true);
                    } else {
                        videoRef.current?.pause();
                        if (videoRef.current) videoRef.current.currentTime = 0;
                        setIsPlaying(false);
                    }
                }
            },
            { threshold: 0.6 }
        );

        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    const togglePlay = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(() => { });
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleFullScreen = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const video = videoRef.current;
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }
    };

    return (
        <div className={styles.card}>
            <div
                className={styles.videoWrapper}
                onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                        videoRef.current?.play().catch(() => { });
                        setIsPlaying(true);
                    }
                }}
                onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                        videoRef.current?.pause();
                        if (videoRef.current) videoRef.current.currentTime = 0;
                        setIsPlaying(false);
                    }
                }}
                onClick={togglePlay}
            >
                {/* Adding #t=0.1 loads the first frame as thumbnail */}
                <video
                    ref={videoRef}
                    src={`${project.video}#t=0.1`}
                    className={styles.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />

                {/* Play/Pause Overlay logic */}
                <div className={`${styles.playOverlay} ${isPlaying ? styles.isPlaying : ""}`}>
                    {!isPlaying ? (
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.5)" />
                            <path d="M14 11L26 18L14 25V11Z" fill="white" />
                        </svg>
                    ) : (
                        <button className={styles.pauseBtn} onClick={togglePlay} aria-label="Pause">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <circle cx="18" cy="18" r="18" fill="rgba(0,0,0,0.5)" />
                                <rect x="13" y="11" width="3" height="14" fill="white" />
                                <rect x="20" y="11" width="3" height="14" fill="white" />
                            </svg>
                        </button>
                    )}
                </div>

                <button className={styles.fullscreenBtn} onClick={toggleFullScreen} aria-label="Fullscreen">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                </button>
            </div>
            <div className={styles.cardInfo}>
                <span className={styles.projectTitle}>{project.title}</span>
            </div>
        </div>
    );
}

export default function Portfolio() {
    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>● Portfolio</span>
                    <h2 className={styles.heading}>Latest Works</h2>
                </div>

                <div className={styles.gridTop}>
                    {projects.slice(0, 4).map((project) => (
                        <VideoCard key={project.id} project={project} />
                    ))}
                </div>

                <div className={styles.gridBottom}>
                    {projects.slice(4).map((project) => (
                        <VideoCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
