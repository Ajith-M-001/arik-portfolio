import React from "react";
import styles from "./TestimonialsSection.module.css";
import {
  TESTIMONIALS_COLUMN_1,
  TESTIMONIALS_COLUMN_2,
} from "@/data/testimonials.data";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h2 id="testimonials-heading" className={styles.heading}>
            What my <br />{" "}
            <span className={styles.headingItalic}>clients say</span>
          </h2>

          <p className={styles.description}>
            See what my clients have to say about working with me and the
            results I helped them achieve.
          </p>
        </div>
      </div>
      {/* Testimonials Grid Container */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.column}>
            {TESTIMONIALS_COLUMN_1.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            {TESTIMONIALS_COLUMN_2.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

function TestimonialCard({ company, quote, testimonial, author }) {
  return (
    <article className={styles.card}>
      {/* Content Section */}
      <div className={styles.content}>
        {/* Company Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={30}
            height={20}
            className={styles.logo}
          />
        </div>

        {/* Quote and Testimonial */}
        <div className={styles.textContent}>
          <h3 className={styles.quote}>{quote}</h3>
          <p className={styles.testimonial}>{testimonial}</p>
        </div>
      </div>

      {/* Author Section */}
      <footer className={styles.author}>
        {/* Avatar */}
        <div className={styles.avatarWrapper}>
          <Image
            src={author.avatar}
            alt={`${author.name} portrait`}
            fill
            sizes="60px"
            className={styles.avatar}
          />
        </div>

        {/* Author Info */}
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{author.name}</p>
          <p className={styles.authorPosition}>{author.position}</p>
        </div>
      </footer>
    </article>
  );
}
