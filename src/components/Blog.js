import Image from "next/image";
import styles from "./Blog.module.css";

const posts = [
    {
        id: 1,
        image: "/images/blog-1.png",
        category: "MARKETING",
        readTime: "5 min read",
        title: "Conducting in-depth research and usability testing",
    },
    {
        id: 2,
        image: "/images/blog-2.png",
        category: "MARKETING",
        readTime: "5 min read",
        title: "Designing cohesive strategies and visual identities",
    },
    {
        id: 3,
        image: "/images/blog-3.png",
        category: "MARKETING",
        readTime: "5 min read",
        title: "Providing expert advice and strategic guidance",
    },
];

export default function Blog() {
    return (
        <section className={styles.blog} id="blog">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.label}>● Blogs</span>
                    <h2 className={styles.heading}>Design Insights & Trends</h2>
                </div>

                {/* Posts Grid */}
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <a key={post.id} href="#" className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>{post.category}</span>
                                    <span className={styles.readTime}>{post.readTime}</span>
                                </div>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
