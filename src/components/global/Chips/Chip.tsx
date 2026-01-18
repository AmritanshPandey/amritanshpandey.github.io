import styles from "./Chips.module.css";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return <span className={styles.chip}>{label}</span>;
}