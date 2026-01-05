// src/components/ui/Button.tsx
import Link from "next/link";
import styles from "./Button.module.css";

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "default",
  disabled = false,
  type = "button",
  ariaLabel,
  className = "",
}) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  // If href provided, render as Link
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
