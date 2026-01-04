import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`u-container ${styles.hero}`}>
      <div className={styles.hero__container}>
        {" "}
        <figure className={styles.hero__image_wrapper}>
          <Image
            src="/assets/hero-section/arik-andersson.webp"
            alt="Portrait of Arik Andersson, web designer and developer"
            width={880}
            height={769}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            className={styles.hero__image}
          />
        </figure>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Web Designer <em>&amp; Developer</em>
          </h1>
          <p className={styles.hero__subtitle}>
            Premium web design, development, and SEO services to help your
            business stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
