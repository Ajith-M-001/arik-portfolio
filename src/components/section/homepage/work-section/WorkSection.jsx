import React from "react";
import styles from "./WorkSection.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_WORK } from "@/data/work.data";
import Image from "next/image";

const WorkSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`u-container`}>
        {/* Header with title and See All button */}
        <header className={styles.header}>
          <h2 id="work-heading">
            Selected <em>Work</em>
          </h2>

          <Link href="/work" className={styles.seeAllLink}>
            <span className={styles.seeAllIcon}>
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className={styles.seeAllText}>See All</span>
          </Link>
        </header>

        {/* Work Grid */}
        <div className={styles.grid}>
          {FEATURED_WORK.map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

function WorkCard({ title, category, image, href }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 684px"
          className={styles.image}
          loading="lazy"
        />

        {/* Noise Texture Overlay */}
        <div className={styles.noiseOverlay} aria-hidden="true" />

        {/* Hover Badge */}
        <div className={styles.hoverBadge} aria-hidden="true">
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </div>
      </div>

      <footer className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.category}>{category}</span>
      </footer>
    </article>
  );
}
