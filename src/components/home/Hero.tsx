import { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Tags from "../global/Tags/Tags";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!heroRef.current) return;
        heroRef.current.classList.add(styles.animateShine);
    }, []);

    return (
        <div ref={heroRef} className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.heroTitle}>
                    <span className={styles.heroSubtitle}>Hey there 👋 I'm <span style={{ fontWeight: "bold" }}>Amritansh</span></span>
                    <span className={styles.heroTitleText}>Product Designer & Developer</span>
                </div>

                <div className={styles.heroDescription}>
                    <span className={styles.heroDescriptionText}>
                        Bridging strategy, design, and front-end engineering to build accessible, scalable, user-first products.
                    </span>

                    <div className="flex flex-wrap gap-12" data-tone="dark">
                        <Tags label="UX Strategy" />
                        <Tags label="UI/Visual Design" />
                        <Tags label="Interaction Design" />
                        <Tags label="Front-end" />
                        <Tags label="AI Integration" />
                        <Tags label="Design Systems" />
                    </div>
                </div>
            </div>

            {/* Noise filter */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="3.78"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
            </svg>
        </div>

    );
}