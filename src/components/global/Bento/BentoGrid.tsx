import styles from "./Bento.module.css";
import BentoCard from "./BentoCard";
import type { BentoItem, BentoRowLayout } from "./types";

type BentoGridProps = {
    items: BentoItem[];
    layout: BentoRowLayout[];
};

export default function BentoGrid({ items, layout }: BentoGridProps) {
    let index = 0;

    return (
        <div className={styles.bentoGrid}>
            {layout.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={styles.bentoRow}
                    style={{ gridTemplateColumns: row.columns }}
                >
                    {row.variants.map((variant, colIndex) => {
                        const item = items[index++];
                        if (!item) return null;

                        return (
                            <BentoCard
                                key={colIndex}
                                {...item}
                                variant={variant}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}