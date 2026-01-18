import styles from "./ThreeDModels.module.css";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const MODELS = [
  {
    label: "3D CREATION",
    title: "3D Render",
    image: "/images/3d/blue-dark.jpg",
    href: "/work/3d-render-1",
  },
  {
    label: "3D CREATION",
    title: "3D Render",
    image: "/images/3d/blue-wave.jpg",
    href: "/work/3d-render-2",
  },
  {
    label: "3D CREATION",
    title: "3D Render",
    image: "/images/3d/warm-light.jpg",
    href: "/work/3d-render-3",
  },
];

export default function ThreeDModels() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>3D Models</h2>

      <div className={styles.grid}>
        {MODELS.map((item, i) => (
          <Link key={i} href={item.href} className={styles.card}>
            <div
              className={styles.media}
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className={styles.content}>
              <span className={styles.label}>{item.label}</span>
              <h3 className={styles.title}>{item.title}</h3>
            </div>

            <span className={styles.icon}>
              <IconArrowUpRight size={18} stroke={2} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}