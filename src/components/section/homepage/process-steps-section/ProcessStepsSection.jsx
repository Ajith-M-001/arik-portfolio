import { PROCESS_STEPS } from "@/data/process-steps.data";
import React from "react";
import styles from "./ProcessStepsSection.module.css";

const ProcessStepsSection = () => {
  return (
    <section className={`u-container`} aria-label=" Our 5-Step Process">
      <div className={styles.container}>
        {PROCESS_STEPS.map((step, index) => (
          <ProcessStep
            key={step.id}
            {...step}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessStepsSection;

function ProcessStep({
  number,
  eyebrow,
  title,
  description,
  features,
  duration,
  index,
  isEven,
  isLast = false,
}) {
  return (
    <article className={`${styles.step} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.column}>
        {!isEven && (
          <StepCard
            eyebrow={eyebrow}
            title={title}
            description={description}
            features={features}
            duration={duration}
          />
        )}
      </div>

      {/* Center Column - Timeline */}
      <div className={styles.timeline}>
        <StepTimeline number={number} isLast={isLast} />
      </div>

      {/* Right Column - Card or Empty */}
      <div className={styles.column}>
        {isEven && (
          <StepCard
            eyebrow={eyebrow}
            title={title}
            description={description}
            features={features}
            duration={duration}
          />
        )}
      </div>
    </article>
  );
}

function StepCard({ eyebrow, title, description, features, duration }) {
  return (
    <div className={styles.card}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {/* Duration Label */}
        <div className={styles.duration}>
          <span className={styles.durationText}>{duration}</span>
        </div>
      </header>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className={styles.features} role="list">
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepTimeline({ number, isLast = false }) {
  return (
    <div className={styles.stepTimeline}>
      {/* Top Line */}
      <div className={styles.line} aria-hidden="true" />

      {/* Badge with Number */}
      <div className={styles.badge}>
        <span className={styles.number}>{number}</span>
      </div>

      {/* Bottom Line - Hidden for last step */}
      {!isLast && <div className={styles.line} aria-hidden="true" />}
    </div>
  );
}
