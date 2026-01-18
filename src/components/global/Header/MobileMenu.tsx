import { useEffect, useRef, useState } from "react";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./Header.module.css";
import MobileWorkDropdown from "./MobileWorkDropDown";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      setScrolled(el.scrollTop > 12);
    };

    el.addEventListener("scroll", onScroll);

    return () => {
      document.body.style.overflow = "";
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.mobileNav}>
      <button
        className={`${styles.mobileClose} ${
          scrolled ? styles.scrolled : ""
        }`}
        onClick={onClose}
        aria-label="Close menu"
      >
        <IconX size={24} />
      </button>

      <div
        ref={contentRef}
        className={styles.mobileNavContent}
      >
        <Link href="/" onClick={onClose}>Home</Link>
        <MobileWorkDropdown />
        <Link href="/about" onClick={onClose}>About</Link>
        <Link href="/articles" onClick={onClose}>Articles</Link>
        <Link href="/contact" onClick={onClose}>Contact</Link>
        <a href="/assets/resume.pdf" download>Resume</a>
      </div>
    </div>
  );
}