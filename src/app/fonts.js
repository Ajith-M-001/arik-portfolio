import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Italic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const chillax = localFont({
  src: [
    {
      path: "../../public/fonts/chillax/Chillax-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/chillax/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
