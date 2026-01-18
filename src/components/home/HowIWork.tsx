import styles from "./Home.module.css";
import Button from "../global/Buttons/Button";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import { IconArrowRight } from "@tabler/icons-react";

export default function HowIWork() {
  return (

    <section className="surface-secondary">

      <SectionTitle
        title="How I Work"
      />
      <article className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Turning ideas into shipped, scalable products.
          </h2>

          <p className={styles.description}>
            I work with product and engineering teams to move from research and problem framing to production-ready design and front-end delivery.
          </p>

          <Button iconRight={IconArrowRight}>
            Explore case studies
          </Button>
        </div>

        {/* CENTER */}
        <div className={styles.processCard}>
          <span className={styles.label}>From idea to execution</span>
          <h3 className={styles.processTitle}>Idea to Execution</h3>

          <ul className={styles.steps}>
            <li>
              <span className={styles.stepsNumber}>01</span>
              <div className={styles.stepsContainer}>
                <span className={styles.stepsHeading}>Research</span>
                <span className={styles.stepsContent}>Understand users, goals, and constraints.</span>
              </div>
            </li>
            <li>
              <span className={styles.stepsNumber}>02</span>
              <div className={styles.stepsContainer}>
                <span className={styles.stepsHeading}>Plan</span>
                <span className={styles.stepsContent}>Define direction, priorities, and success metrics.</span>
              </div>
            </li>

            <li>
              <span className={styles.stepsNumber}>03</span>
              <div className={styles.stepsContainer}>
                <span className={styles.stepsHeading}>Design & Build</span>
                <span className={styles.stepsContent}>Design and implement scalable UI in collaboration with engineers.</span>
              </div>
            </li>


            <li>
              <span className={styles.stepsNumber}>04</span>
              <div className={styles.stepsContainer}>
                <span className={styles.stepsHeading}>Ship & Iterate</span>
                <span className={styles.stepsContent}>Launch, learn, and continuously improve.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.card}>
            <span className={styles.label}>For growing products</span>
            <span className={styles.cardHeading}>Scale & Improve</span>

            <div className={styles.cardListContainer}>
              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Improve usability and consistency</span>
              </div>

              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Extend design systems</span>
              </div>
              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Ship alongside active development</span>
              </div>

              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Reduce UX debt and design fragmentation</span>
              </div>
            </div>
          </div>


          <div className={styles.card}>
            <span className={styles.label}>For new initiatives</span>
            <span className={styles.cardHeading}>Early Product Work</span>

            <div className={styles.cardListContainer}>
              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Research and define direction</span>
              </div>

              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Establish UX foundations</span>
              </div>
              <div className={styles.cardList}>
                <div className={styles.listDot}></div>
                <span>Build MVP-ready interfaces</span>
              </div>
            </div>
            <div className={styles.cardList}>
              <div className={styles.listDot}></div>
              <span>Validate ideas quickly through prototypes</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}