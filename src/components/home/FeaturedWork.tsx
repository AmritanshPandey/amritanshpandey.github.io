import styles from "./Home.module.css";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import BentoGrid from "../global/Bento/BentoGrid";
import type { BentoItem } from "../global/Bento/types";

const featuredProjects: BentoItem[] = [
    {
        title: "UX Case Studies",
        tags: ["Web", "Design", "Development", "Next.js"],
        image: "/assets/images/bento1.png",
    },
    {
        title: "UX Case Studies",
        tags: ["Web", "Design", "Development", "Next.js"],
        image: "/assets/images/bento2.png",
    },
    {
        title: "UX Case Studies",
        tags: ["Web", "Design", "Development", "Next.js"],
        image: "/assets/images/bento3.png",
    },
    {
        title: "UX Case Studies",
        tags: ["Web", "Design", "Development", "Next.js"],
        image: "/assets/images/bento4.png",
    },
];

export default function FeaturedWork() {
    return (
        <section className="surface-secondary">
            <SectionTitle
                title="Featured Work"
                actionLabel="Explore All"
                actionHref="/work/case-studies"
            />

            <div className={styles.featuredWorkSection}>
                <BentoGrid
                    items={featuredProjects}
                    layout={[
                        {
                            columns: "0.3fr 0.7fr",
                            variants: ["small", "large"],
                        },
                        {
                            columns: "0.4fr 0.6fr",
                            variants: ["small", "large"],
                        },
                    ]}
                />
            </div>
        </section>
    );
}