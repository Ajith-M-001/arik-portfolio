import { SERVICES_DATA } from "@/data/services.data";
import styles from "./service.section.module.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className={styles.section} aria-label="Services">
      <div className="u-container">
        <div className={styles.grid}>
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

const ServiceCard = ({ number, title, description, link }) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.number} aria-hidden="true">
            {number}
          </span>
          <h3 className={styles.title}>{title}</h3>
        </header>
        {/* Description */}
        <p className={styles.description}>{description}</p>
      </div>

      {/* CTA Link */}
      <Link href={link.href} className={styles.link}>
        <span className={styles.linkIcon}>
          <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className={styles.linkText}>{link.label}</span>
      </Link>
    </article>
  );
};
