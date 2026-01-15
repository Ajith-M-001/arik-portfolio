// Footer.jsx
import React from "react";
import styles from "./footer.module.css";
import { LOGO_SVG, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import {
  FOOTER_COPYRIGHT,
  FOOTER_CTA,
  FOOTER_NAV,
  FOOTER_SOCIAL_LINKS,
} from "@/data/footer.data";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* Column 1: Logo & Social */}
          <div className={styles.brandColumn}>
            <div className={styles.logo} aria-label="Arik Andersson">
              <Image
                width={52}
                height={19}
                src={LOGO_SVG}
                alt={`${SITE_NAME} logo`}
              />
            </div>

            <FooterSocial links={FOOTER_SOCIAL_LINKS} />
          </div>

          <FooterColumn
            title={FOOTER_NAV.pages.title}
            links={FOOTER_NAV.pages.links}
            cta={FOOTER_CTA}
          />

          <FooterColumn
            title={FOOTER_NAV.cms.title}
            links={FOOTER_NAV.cms.links}
          />

          <FooterColumn
            title={FOOTER_NAV.utility.title}
            links={FOOTER_NAV.utility.links}
          />
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {FOOTER_COPYRIGHT.year} Made by Pawel Gola. Powered by Framer.
          </p>
          {/* <ScrollToTop /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterSocial({ links }) {
  return (
    <nav className={styles.social} aria-label="Social media">
      <ul className={styles.socialList}>
        {links.map((link) => (
          <li key={link.id} className={styles.socialItem}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.socialIcon}>
                <Image
                  src={link.icon}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </span>
              <span className={styles.socialLabel}>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterColumn({ title, links, cta }) {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{title}</h3>

      <nav aria-label={title}>
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {cta && (
        <div style={{ paddingRight: "50px" }}>
          <Button href={cta.href} variant="primary">
            {cta.text}
          </Button>
        </div>
      )}
    </div>
  );
}
