import Image from "next/image";
import Chip from "../Chips/Chip";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
    eyebrow?: string;
    meta?: string;
    description?: string;
    chips?: string[];
    imageSrc: string;
    imageAlt?: string;
}

export default function ImageCard({
    eyebrow,
    meta,
    description,
    chips = [],
    imageSrc,
    imageAlt = "",
}: ImageCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.media}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={styles.mediaImage}
                />
            </div>

            <div className={styles.meta}>
                {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
                {meta && <span className={styles.metaText}>{meta}</span>}

                {description && (
                    <p className={styles.description}>{description}</p>
                )}

                {chips.length > 0 && (
                    <div className={styles.chips}>
                        {chips.map((chip) => (
                            <Chip key={chip} label={chip} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}