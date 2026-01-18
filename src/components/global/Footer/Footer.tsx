import Link from 'next/link';
import styles from './Footer.module.css';
import {
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconBrandBehance,
  IconBrandDribbble,
  IconBrandGithub,
  IconMapPin,
  IconDevices,
  IconDeviceImac,
  IconSparkles,
  IconDeviceMobileCode,
  IconCategory2,
  IconCode,
  IconTableHeart,
  IconBrandSupernova,
  IconIcons,
  IconCube,
  IconFileDescription,
  IconBrandApple,
  IconBrandAndroid
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerGrid}>

          {/* CONTACT */}
          <div className={styles.footerCol}>
            <span className={styles.footerTitle}>Get in touch</span>
            <span className={styles.footerEyebrow}>Contact me at</span>

            <div className={styles.footerContactInfo}>
              <div className={styles.footerItem}>
                <IconPhone stroke={1.5} />
                <a href="tel:+918130513047">+91 8130513047</a>
              </div>

              <div className={styles.footerItem}>
                <IconMail stroke={1.5} />
                <a href="mailto:amritansh.pandey6@gmail.com">
                  amritansh.pandey6@gmail.com
                </a>
              </div>

              <span className={styles.footerEyebrow}>Socials</span>

              <div className={styles.footerItem}>
                <IconBrandLinkedin stroke={1.5} />
                <a href="https://www.linkedin.com/in/amritansh-pandey-bb5b3087/">
                  amritansh-pandey-bb5b3087
                </a>
              </div>

              <div className={styles.footerItem}>
                <IconBrandBehance stroke={1.5} />
                <a href="https://www.behance.net/amritanshpandey">
                  amritanshpandey
                </a>
              </div>

              <div className={styles.footerItem}>
                <IconBrandDribbble stroke={1.5} />
                <a href="https://dribbble.com/amrit10">amrit10</a>
              </div>

              <div className={styles.footerItem}>
                <IconBrandGithub stroke={1.5} />
                <a href="https://github.com/AmritanshPandey">
                  AmritanshPandey
                </a>
              </div>

              <span className={styles.footerEyebrow}>Location</span>

              <div className={styles.footerItem}>
                <IconMapPin stroke={1.5} />
                <span>Gurgaon</span>
              </div>
            </div>
          </div>

          {/* PRODUCT DESIGN */}
          <div className={styles.footerCol}>
            <span className={styles.footerTitle}>Product Design</span>

            <span className={styles.footerEyebrow}>
              AI Focused and Development
            </span>

            <div className={styles.footerItem}>
              <IconSparkles stroke={1.5} />
              <Link href="/work/case-studies">AI Products</Link>
            </div>

            <div className={styles.footerItem}>
              <IconCode stroke={1.5} />
              <Link href="/work/case-studies">Design & Dev Tools</Link>
            </div>

            <div className={styles.footerItem}>
              <IconDeviceMobileCode stroke={1.5} />
              <Link href="/work/case-studies">Web Apps</Link>
            </div>

            <span className={styles.footerEyebrow}>UI/UX Design</span>

            <div className={styles.footerItem}>
              <IconDevices stroke={1.5} />
              <Link href="/work/case-studies">UX Case Studies</Link>
            </div>

            <div className={styles.footerItem}>
              <IconTableHeart stroke={1.5} />
              <Link href="/work/case-studies">UI Concepts</Link>
            </div>

            <div className={styles.footerItem}>
              <IconCategory2 stroke={1.5} />
              <Link href="/work/case-studies">Design Systems</Link>
            </div>

            <div className={styles.footerItem}>
              <IconDeviceImac stroke={1.5} />
              <Link href="/work/case-studies">Landing Page UI</Link>
            </div>
          </div>

          {/* BEYOND INTERFACES */}
          <div className={styles.footerCol}>
            <span className={styles.footerTitle}>Beyond Interfaces</span>

            <div className={styles.footerItem}>
              <IconBrandSupernova stroke={1.5} />
              <Link href="/work/case-studies">Illustrations</Link>
            </div>

            <div className={styles.footerItem}>
              <IconIcons stroke={1.5} />
              <Link href="/work/case-studies">Branding</Link>
            </div>

            <div className={styles.footerItem}>
              <IconCube stroke={1.5} />
              <Link href="/work/case-studies">3D Models</Link>
            </div>
          </div>

          {/* DOWNLOADS */}
          <div className={styles.footerCol}>
            <span className={styles.footerTitle}>Downloads</span>

            <div className={styles.footerItem}>
              <IconFileDescription stroke={1.5} />
              <Link
                href="/docs/amritansh-pandey-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>

            <div className={styles.footerItem}>
              <IconBrandApple stroke={1.5} />
              <Link href="/apps/ios">iOS Apps</Link>
            </div>

            <div className={styles.footerItem}>
              <IconBrandAndroid stroke={1.5} />
              <Link href="/apps/android">Android Apps</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Amritansh Pandey. All rights reserved.
      </div>
    </footer>
  );
}