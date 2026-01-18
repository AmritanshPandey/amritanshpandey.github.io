import Link from "next/link";
import {
  IconDevices,
  IconChevronDown,
  IconDeviceImac,
  IconSparkles,
  IconDeviceMobileCode,
  IconCategory2,
  IconCode,
  IconTableHeart,
  IconTool,
  IconDevicesCog,
  IconCamera,
  IconBrandSupernova,
  IconIcons,
  IconCube,
} from "@tabler/icons-react";
import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import FeaturedWork from "./FeaturedWork";

export default function WorkDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);
  const CLOSE_DELAY = 160;

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
    }
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimeout.current = window.setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY);
  };

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <span className={styles.dropdownToggle}>
        <span className="body-semibold">Work</span>
        <IconChevronDown
          className={`${styles.dropdownIcon} ${
            isOpen ? styles.rotate : ""
          }`}
        />
      </span>

      <div
        className={`${styles.megaMenu} ${
          isOpen ? styles.megaMenuActive : ""
        }`}
      >
        <div className={styles.megaGrid}>
          {/* Featured */}
          <div className={styles.megaMenuEyebrowContainer}>
            <span className={styles.megaMenuEyebrow}>Featured Work</span>
            <FeaturedWork />
          </div>

          {/* Product Design */}
          <div className={styles.FeatureWorkMenuList}>
            <span className={styles.megaMenuEyebrow}>Product Design</span>
            <div className={styles.menuListContainer}>
              <Link href="/" className={styles.menuListItem}>
                <IconDevices stroke={1.5} />
                <span className="label">UX Case Studies</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconSparkles stroke={1.5} />
                <span className="label">AI Products</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconTableHeart stroke={1.5} />
                <span className="label">UI Concepts</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconCategory2 stroke={1.5} />
                <span className="label">Design Systems</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconDeviceImac stroke={1.5} />
                <span className="label">Landing Pages</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconTool stroke={1.5} />
                <span className="label">SaaS</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconDeviceMobileCode stroke={1.5} />
                <span className="label">Apps</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconDevicesCog stroke={1.5} />
                <span className="label">Tools</span>
              </Link>
            </div>
          </div>

          {/* Beyond Interfaces */}
          <div className={styles.FeatureWorkMenuList}>
            <span className={styles.megaMenuEyebrow}>Beyond Interfaces</span>
            <div className={styles.menuListContainer}>
              <Link href="/" className={styles.menuListItem}>
                <IconBrandSupernova stroke={1.5} />
                <span className="label">Illustrations</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconIcons stroke={1.5} />
                <span className="label">Branding</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconCube stroke={1.5} />
                <span className="label">3D Models</span>
              </Link>

              <Link href="/" className={styles.menuListItem}>
                <IconCamera stroke={1.5} />
                <span className="label">Photography</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}