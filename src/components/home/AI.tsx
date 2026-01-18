import SectionTitle from "../global/SectionTitle/SectionTitle";
import ImageCard from "../global/Cards/ImageCard";
import styles from "./Home.module.css";

const AI_WEB_TOOLS = [
    {
        id: 1,
        eyebrow: "AI Tool",
        meta: "Web · SaaS",
        description: "AI-powered workflow tool for content, insights, and automation.",
        imageSrc: "/assets/images/bento1.png",
        imageAlt: "AI workflow product UI",
        chips: ["AI", "SaaS", "Product"],
    },
    {
        id: 2,
        eyebrow: "Mobile App",
        meta: "iOS · Android",
        description: "Cross-platform fitness app focused on habit-building and clarity.",
        imageSrc: "/assets/images/bento2.png",
        imageAlt: "Fitness app interface",
        chips: ["Flutter", "Mobile", "UX"],
    },
    {
        id: 3,
        eyebrow: "Web Platform",
        meta: "Next.js · Front-end",
        description: "High-performance marketing website with strong accessibility foundations.",
        imageSrc: "/assets/images/bento3.png",
        imageAlt: "Web platform homepage",
        chips: ["Web", "Frontend", "Accessibility"],
    },

];

function AI() {
    return (
        <section className="surface">
            <SectionTitle
                title="Live Projects"
                actionLabel="Explore All"
                actionHref="/work/case-studies"
            />

            <article className={styles.aiWebTools}>
                <div className={styles.aiCardGrid}>
                    {AI_WEB_TOOLS.map((item) => (
                        <ImageCard
                            key={item.id}
                            eyebrow={item.eyebrow}
                            meta={item.meta}
                            description={item.description}
                            imageSrc={item.imageSrc}
                            imageAlt={item.imageAlt}
                            chips={item.chips}
                        />
                    ))}
                </div>
            </article>
        </section>
    );
}

export default AI;