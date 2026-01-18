import FeaturedWorkItem from "./FeaturedWorkItem";
import styles from "./Header.module.css";

const featuredWorkData = [
  {
    title: "Atlas Workspace",
    desc: "A modular SaaS platform for streamlined internal workflows.",
    image: "/assets/images/bento4.png",
    href: "#",
  },
  {
    title: "Orbit CRM",
    desc: "A lightweight CRM for managing leads and customer relationships.",
    image: "/assets/images/bento4.png",
    href: "#",
  },
  {
    title: "Nova Health Dashboard",
    desc: "A data-driven dashboard for tracking key patient metrics.",
    image: "/assets/images/bento4.png",
    href: "#",
  },
  {
    title: "Pulse Analytics",
    desc: "A real-time analytics tool for actionable business insights.",
    image: "/assets/images/bento4.png",
    href: "#",
  },
];
export default function FeaturedWork() {
    return (
        <div className={styles.featuredWorkContainer}>
            {featuredWorkData.map((item) => (
                <FeaturedWorkItem key={item.title} {...item} />
            ))}
        </div>
    );
}