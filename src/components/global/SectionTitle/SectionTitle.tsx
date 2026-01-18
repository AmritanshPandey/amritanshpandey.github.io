import React from "react";
import { IconChevronRight } from '@tabler/icons-react';
import styles from './SectionTitle.module.css'
import Button from "../Buttons/Button";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  actionLabel = "View all",
  actionHref,
}: SectionTitleProps) {
  return (

    <div className={styles.sectionTitleContainer}>
      <div>
        <span>{title}</span>
        {subtitle && <p className="body">{subtitle}</p>}
      </div>
      <div className={styles.sectionTitleButton}>
        {actionHref && (

          <Button
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="tertiary"
            iconRight={IconChevronRight}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}