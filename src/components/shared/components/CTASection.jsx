import React from "react";
import styles from "./CTASection.module.css";
import { Button } from "@/components/ui/Button/Button";

const CTASection = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      {/* Top Border Line */}
      <div className={styles.topLine} aria-hidden="true" />
      {/* Scrolling Banner */}
      <ScrollingBanner />
      {/* Bottom Border Line */}
      <div className={styles.bottomLine} aria-hidden="true" />

      {/* Main CTA Content */}
      <CTAContent />
    </section>
  );
};

export default CTASection;

function ScrollingBanner() {
  const items = [
    { text: "Let's talk", symbol: "+++" },
    { text: "Let's talk", symbol: "+++" },
    { text: "Let's talk", symbol: "+++" },
    { text: "Let's talk", symbol: "+++" },
    { text: "Let's talk", symbol: "+++" },
    { text: "Let's talk", symbol: "+++" },
  ];

  return (
    <div className={styles.banner} aria-hidden="true">
      <div className={styles.track}>
        {/* First set */}
        <div className={styles.slideGroup}>
          {items.map((item, index) => (
            <div key={`first-${index}`} className={styles.item}>
              <span className={styles.symbol}>{item.symbol}</span>
              <span className={styles.text}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className={styles.slideGroup}>
          {items.map((item, index) => (
            <div key={`second-${index}`} className={styles.item}>
              <span className={styles.symbol}>{item.symbol}</span>
              <span className={styles.text}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTAContent() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {/* Eyebrow */}
        <p className={styles.eyebrow}>Project in mind?</p>
        {/* Main Heading */}
        <h2 id="cta-heading" className={styles.heading}>
          Let&apos;s make your
          <br />
          <span className={styles.headingItalic}>Website shine</span>
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Premium web design, webflow, and SEO services to help your business
          stand out.
        </p>

        <Button href={"/contact"} variant="primary">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
