import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/constants";
import { chillax, satoshi } from "./fonts";
import "./globals.css";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chillax.variable} ${satoshi.variable}`}>
        {/* Header */}
        <main>{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
