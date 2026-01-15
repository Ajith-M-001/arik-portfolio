// src/components/AboutSection/SocialLinks.tsx

import Image from "next/image";
import styles from "./SocialLinks.module.css";

export function SocialLinks({ links }) {
  return (
    <nav className={styles.social} aria-label="Social media links">
      <ul className={styles.list} role="list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`Follow on ${link.name}`}
            >
              <Image
                src={link.icon}
                alt=""
                width={20}
                height={20}
                className={styles.icon}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
