import { ReactNode } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./HighlightCard.module.css";
import Button from "../Buttons/Button";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function HighlightCard({
  icon,
  title,
  description,
  href,
}: HighlightCardProps) {
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.icon}>{icon}</div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.cta}>
          <Button variant="icon" aria-label="Open" tabIndex={-1}>
            <IconArrowRight size={24} stroke={2} />
          </Button>
        </div>
      </div>
    </Link>
  );
}