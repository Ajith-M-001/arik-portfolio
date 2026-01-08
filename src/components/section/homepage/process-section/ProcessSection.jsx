import { ArrowDown } from "lucide-react";
import styles from "./ProcessSection.module.css";

const ProcessSection = () => {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>The Process</p>

          {/* Main Heading */}
          <h2 id="process-heading" className={styles.heading}>
            Your Website
            <br />
            <em className={styles.headingItalic}>in 5 steps</em>
          </h2>

          {/* Description */}
          <p className={styles.description}>
            Our process ensures that we create a website tailored to your
            business needs.
          </p>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          {/* Badge with Icon */}
          <button className={styles.badge} aria-label="Scroll to process steps">
            <ArrowDown size={20} strokeWidth={1.5} />
          </button>

          {/* Vertical Line */}
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
