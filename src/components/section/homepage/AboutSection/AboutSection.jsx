// src/components/AboutSection/AboutSection.tsx

import Image from "next/image";
import styles from "./AboutSection.module.css";
import { SocialLinks } from "./SocialLinks";
import { ScrollingText } from "./ScrollingText";

const SOCIAL_LINKS = [
  {
    id: "twitter",
    name: "Twitter",
    icon: "/assets/about-section/ph_twitter-logo-light.svg",
    href: "https://twitter.com/yourhandle",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/assets/about-section/ph_instagram-logo-light.svg",
    href: "https://instagram.com/yourhandle",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    icon: "/assets/about-section/ph_dribbble-logo-light.svg",
    href: "https://dribbble.com/yourhandle",
  },
  {
    id: "behance",
    name: "Behance",
    icon: "/assets/about-section/ph_behance-logo-light.svg",
    href: "https://behance.net/yourhandle",
  },
];

export function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      {/* Scrolling Text Background - Full Width */}
      <ScrollingText text="Arik Andersson" />

      {/* Portrait Image - Absolutely Positioned */}
      <div className={styles.portraitWrapper}>
        <Image
          src="/assets/about-section/arik-portrait.webp"
          alt="Arik Andersson portrait"
          fill
          sizes="(max-width: 768px) 100vw, 880px"
          className={styles.portrait}
          priority
        />
      </div>

      {/* Content Container - Absolutely Positioned */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Heading */}
          <div className={styles.headingWrapper}>
            <h2 id="about-heading" className={styles.heading}>
              A website that leaves
              <br />
              <span className={styles.headingItalic}>
                a lasting impression!
              </span>
            </h2>
          </div>

          {/* Right Column - Bio & Social */}
          <div className={styles.bioWrapper}>
            {/* Bio Text */}
            <p className={styles.bio}>
              Hi, I&apos;m Arik Andersson - a freelancer specializing in premium
              web design, development, and SEO services. I&apos;m passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. Let&apos;s work
              together to bring your vision to life!
            </p>

            {/* Social Links */}
            <SocialLinks links={SOCIAL_LINKS} />
          </div>
        </div>
      </div>
    </section>
  );
}
