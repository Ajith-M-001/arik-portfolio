// src/data/footer.data.js

export const FOOTER_SOCIAL_LINKS = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "/assets/footer/ph_instagram-logo-light.svg",
    href: "https://instagram.com/yourhandle",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "/assets/footer/ph_twitter-logo-light.svg",
    href: "https://twitter.com/yourhandle",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    icon: "/assets/footer/ph_dribbble-logo-light.svg",
    href: "https://dribbble.com/yourhandle",
  },
  {
    id: "behance",
    name: "Behance",
    icon: "/assets/footer/ph_behance-logo-light.svg",
    href: "https://behance.net/yourhandle",
  },
];

export const FOOTER_NAV = {
  pages: {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  cms: {
    title: "CMS",
    links: [
      { label: "Work", href: "/work" },
      { label: "Work Single", href: "/work/example" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Post", href: "/blog/example" },
    ],
  },
  utility: {
    title: "Utility Pages",
    links: [
      { label: "404 Error Page", href: "/404" },
      { label: "Password Protected", href: "/protected" },
      { label: "Styleguide", href: "/styleguide" },
      { label: "Licensing", href: "/licensing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
};

export const FOOTER_CTA = {
  text: "More Templates",
  href: "https://templates.yoursite.com",
  icon: "arrow-up-right",
};

export const FOOTER_COPYRIGHT = {
  text: "© 2022 Made by Pawel Gola. Powered by Framer.",
  year: new Date().getFullYear(),
};
