import Link from "next/link";
import styles from "./Header.module.css";
import WorkDropdown from "./WorkDropdown";
import { IconMenu2 } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <button
          className={`${styles.hamburgerMenu} ${
            scrolled ? styles.scrolled : ""
          }`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 size={24} />
        </button>

        <nav className={styles.navDesktop}>
          <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>
            <li><WorkDropdown /></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
            <li><a href="/assets/resume.pdf" download>Resume</a></li>
          </ul>
        </nav>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}