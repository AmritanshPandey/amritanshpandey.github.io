import { useRef, useEffect, useState } from "react";
import styles from "./Tags.module.css";

interface TagsProps {
  label: string;
  href?: string;
  tone?: "light" | "dark";
}

export default function Tags({ label, href, tone }: TagsProps) {
  const ref = useRef<HTMLAnchorElement | HTMLSpanElement>(null);
  const [resolvedTone, setResolvedTone] = useState<"light" | "dark">(
    tone ?? "light"
  );

  useEffect(() => {
    if (tone) return;

    const container = ref.current?.closest("[data-tone]");
    const containerTone = container?.getAttribute("data-tone");

    if (containerTone === "dark" || containerTone === "light") {
      setResolvedTone(containerTone);
    }
  }, [tone]);

  const className = `${styles.tag} ${
    resolvedTone === "light" ? styles.light : styles.dark
  }`;

  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {label}
    </span>
  );
}