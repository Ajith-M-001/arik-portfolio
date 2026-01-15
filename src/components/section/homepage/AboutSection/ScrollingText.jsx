// src/components/AboutSection/ScrollingText.tsx
"use client";

import styles from "./ScrollingText.module.css";

export function ScrollingText({ text = "Arik Andersson" }) {
  return (
    <div className={styles.scrollingWrapper} aria-hidden="true">
      {/* First set */}
      <div className={styles.scrollingText}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>

      {/* Second set for seamless loop */}
      <div className={styles.scrollingText}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
