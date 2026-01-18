'use client';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
  return (
    <section className={styles.caseStudy}>
      <article>
        <img className={styles.caseStudyImage} src="/assets/images/caseStudy/banner.png" alt="Case Study" />
        <div className={styles.caseStudyIntro}>
          <div className={styles.caseStudyTitle}>
            <span className={styles.caseStudyEyebrow}>Case Study</span>
            <span className={styles.caseStudyDisplay}>Project Title Here</span>
          </div>
          <div className={styles.caseStudyOverview}>
            <div className={styles.caseStudyOverviewItemList}>
              <div className={styles.caseStudyOverviewItem}>
                <span className={styles.caseStudyOverviewTitle}>Role</span>
                <span className={styles.caseStudyOverviewContent}>UI/UX Designer</span>
              </div>
              <div className={styles.caseStudyOverviewItem}>
                <span className={styles.caseStudyOverviewTitle}>Duration</span>
                <span className={styles.caseStudyOverviewContent}>Jan 2023 - Jun 2023</span>
              </div>
              <div className={styles.caseStudyOverviewItem}>
                <span className={styles.caseStudyOverviewTitle}>Tools</span>
                <span className={styles.caseStudyOverviewContent}>Figma, Adobe XD</span>
              </div>
            </div>
            <div className={styles.caseStudyIntroduction}>
              <span className={styles.caseStudyHeading}>Introduction</span>
              <span className={styles.caseStudyBody}>Project Overview</span>
              This is a brief overview of the project, highlighting the main objectives, challenges, and outcomes. The project aimed to create an intuitive user interface that enhances user experience while meeting business goals.
            </div>
          </div>
        </div>
      </article>
      <article className={styles.caseStudyProjectInfo}>
        <div className={styles.caseStudyGoal}>
        </div>
        <div className={styles.caseStudyDesignProcess}>
        </div>
        <div className={styles.caseStudyWorkFlow}>
        </div>
      </article>
      <article className={styles.caseStudyResearch}>
        <div className={styles.caseStudyFoundational}>
        </div>
        <div className={styles.caseStudyCompetitive}>
        </div>
        <div className={styles.caseStudyUserSurvey}>
        </div>
        <div className={styles.caseStudyUserInterview}>
        </div>
        <div className={styles.caseStudyUserKeyInsights}>
        </div>
      </article>
      <article className={styles.caseStudyDefine}>
        <div className={styles.caseStudyEmpathyMapping}>
        </div>
        <div className={styles.caseStudyPersonas}>
        </div>
        <div className={styles.caseStudyJourneyMapping}>
        </div>
      </article>

      <article className={styles.caseStudyIdeation}>
        <div className={styles.caseStudyInformationArchitecture}>
        </div>
        <div className={styles.caseStudyWireframing}>
        </div>
      </article>
      <article className={styles.caseStudyDesign}>
        <div className={styles.caseStudyColor}>
        </div>
        <div className={styles.caseStudyTypography}>
        </div>
        <div className={styles.caseStudyIconography}>
        </div>
        <div className={styles.caseStudyDesignSystem}>
        </div>
        <div className={styles.caseStudyUI}>
        </div>
      </article>
      <article className={styles.caseStudyPrototype}>
      
      </article>
      <article className={styles.caseStudyUsabilityTesting}>

      </article>
      <article className={styles.caseStudyReflection}>
      </article>
    </section>
  );
}