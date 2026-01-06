import styles from "./logo.section.module.css";
import Image from "next/image";

const CLIENT_LOGOS = [
  {
    src: "/assets/logo-section/logo_1.webp",
    alt: "Client logo 1",
    width: 180,
    height: 60,
  },
  {
    src: "/assets/logo-section/logo_2.webp",
    alt: "Client logo 2",
    width: 200,
    height: 80,
  },
  {
    src: "/assets/logo-section/logo_3.webp",
    alt: "Client logo 3",
    width: 160,
    height: 70,
  },
  {
    src: "/assets/logo-section/logo_4.webp",
    alt: "Client logo 4",
    width: 190,
    height: 65,
  },
  {
    src: "/assets/logo-section/logo_5.webp",
    alt: "Client logo 5",
    width: 210,
    height: 75,
  },
  {
    src: "/assets/logo-section/logo_6.webp",
    alt: "Client logo 6",
    width: 170,
    height: 68,
  },
];

const LogoSection = () => {
  return (
    <section className={styles.section} aria-label="Trusted by leading brands">
      <div className={styles.container}>
        <ul className={styles.grid}>
          {CLIENT_LOGOS.map((logo, index) => (
            <li key={logo.src} className={styles.logoWrapper}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoSection;
