import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

type FeaturedWorkItemProps = {
  title: string;
  desc: string;
  image: string;
  href: string;
};

function FeaturedWorkItem({
  title,
  desc,
  image,
  href,
}: FeaturedWorkItemProps) {
  return (
    <Link
      href={href}
      className={styles.featuredWorkCard}
    >
      <Image
        src={image}
        alt={title}
        width={56}
        height={56}
        className={styles.featuredThumb}
      />
      <div className={styles.featuredText}>
        <h5 className="label">{title}</h5>
        <p className="caption">{desc}</p>
      </div>
    </Link>
  );
}

export default FeaturedWorkItem;