// src/components/Header/MobileMenu.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { Button } from "@/components/ui/Button/Button";

export function MobileMenu({ links, cta }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-controls="mobile-menu"
      >
        <span className={styles.hamburger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        id="mobile-menu"
        className={`${styles.menu} ${isOpen ? styles.open : ""}`}
        aria-label="Mobile navigation"
      >
        <ul className={styles.menuList} role="list">
          {links.map((link) => (
            <li key={link.href} className={styles.menuItem}>
              {link.dropdown ? (
                <details className={styles.mobileDropdown}>
                  <summary className={styles.menuLink}>
                    {link.label}
                    <svg
                      className={styles.dropdownIcon}
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
                  <ul className={styles.submenu} role="list">
                    {link.dropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={styles.submenuLink}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={link.href}
                  className={styles.menuLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA in Mobile Menu */}
        <div className={styles.mobileCta}>
          <Button
            href={cta.href}
            variant="primary"
            size="large"
            onClick={() => setIsOpen(false)}
          >
            {cta.label}
          </Button>
        </div>
      </nav>
    </>
  );
}
