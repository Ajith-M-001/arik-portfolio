import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { LOGO_SVG, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  {
    href: "/pages",
    label: "Pages",
    dropdown: [
      { href: "/pages/case-studies", label: "Case Studies" },
      { href: "/pages/pricing", label: "Pricing" },
      { href: "/pages/contact", label: "Contact" },
    ],
  },
];

const CTA_BUTTON = {
  href: "/contact",
  label: "let's talk",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          href="/"
          className={styles.header__logo}
          aria-label="Arik Andersson - Home"
        >
          <Image
            width={52}
            height={19}
            src={LOGO_SVG}
            alt={`${SITE_NAME} logo`}
          />
        </Link>
        <nav className={styles.header__nav} aria-label="Main navigation">
          <ul className={styles.header__navList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className={styles.header__navItem}>
                {link.dropdown ? (
                  <details className={styles.header__dropdown}>
                    <summary className={styles.header__navLink}>
                      {link.label}
                      <svg
                        className={styles.header__dropdownIcon}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <ul className={styles.header__dropdownMenu} role="list">
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={styles.header__dropdownLink}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={link.href} className={styles.header__navLink}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header__cta}>
          <Button href={CTA_BUTTON.href} variant="primary">
            {CTA_BUTTON.label}
          </Button>
        </div>

        <MobileMenu links={NAV_LINKS} cta={CTA_BUTTON} />
      </div>
    </header>
  );
};

export default Header;
