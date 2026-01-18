import {
    IconLayout,
    IconSparkles,
    IconApps,
    IconCube,
    IconCode,
    IconBrowser,
    IconCube3dSphere,
    IconBrush
} from "@tabler/icons-react";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import HighlightCard from "../global/Cards/HighlightCard";
import styles from "./Home.module.css";

export default function WorkHighlights() {
    return (
        <section className="surface-">

            <SectionTitle
                title="Work Highlights"
            />
            <article className={styles.workHighLight}>
                <div className={styles.workHighlightGrid}>
                    <HighlightCard
                        icon={<IconLayout size={32} />}
                        title="UX Case Studies"
                        description="End-to-end product design with measurable impact."
                        href="/work/ux-case-studies"
                    />

                    <HighlightCard
                        icon={<IconSparkles size={32} />}
                        title="AI Products"
                        description="Human-centered AI products using GenAI workflows."
                        href="/work/ai-products"
                    />

                    <HighlightCard
                        icon={<IconApps size={32} />}
                        title="UI Concepts"
                        description="Exploratory UI concepts focused on visuals and polish."
                        href="/work/ui-concepts"
                    />

                    <HighlightCard
                        icon={<IconCube size={32} />}
                        title="Design System"
                        description="Scalable design systems with tokens and components."
                        href="/work/design-system"
                    />

                    <HighlightCard
                        icon={<IconCode size={32} />}
                        title="Live Projects"
                        description="Production-ready software built with performance & scalability."
                        href="/work/software-development"
                    />

                    <HighlightCard
                        icon={<IconBrowser size={32} />}
                        title="Landing Pages"
                        description="High-conversion pages focused on clarity and intent"
                        href="/work/landing-pages"
                    />

                    <HighlightCard
                        icon={<IconCube3dSphere size={32} />}
                        title="3D Renders"
                        description="High-quality 3D visuals and lighting realism"
                        href="/work/3d-renders"
                    />

                    <HighlightCard
                        icon={<IconBrush size={32} />}
                        title="Illustrations"
                        description="Custom illustrations crafted for storytelling and brand clarity"
                        href="/work/illustrations"
                    />
                </div>

            </article>
        </section>
    );
}