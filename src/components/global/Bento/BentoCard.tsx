import styles from "./Bento.module.css";
import Tags from "../../global/Tags/Tags";
import type { BentoItem, BentoVariant } from "./types";

type BentoCardProps = BentoItem & {
    variant?: BentoVariant;
};

export default function BentoCard({
    title,
    tags,
    image,
    variant = "small",
}: BentoCardProps) {
    return (
        <article
            className={`${styles.bentoCard} ${styles[variant]}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={styles.bentoOverlay}>
                <div className="flex flex-col gap-8">
                    <span className="h2 text-white">{title}</span>

                    <div className={styles.bentoTags}>
                        {tags.map((tag) => (
                            <Tags
                                key={tag}
                                label={tag}
                                tone="light"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}