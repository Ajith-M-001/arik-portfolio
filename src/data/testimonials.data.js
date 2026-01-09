// src/data/testimonials.data.js

export const TESTIMONIALS = [
  {
    id: "john-smith",
    company: {
      name: "ABC Company",
      logo: "/assets/testimonials-section/logo_3.webp",
    },
    quote: "Amazing Results with Arik's Premium Web Design Services.",
    testimonial:
      "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
    author: {
      name: "John Smith",
      position: "ABC Company",
      avatar: "/assets/testimonials-section/john-smith.webp",
    },
  },
  {
    id: "david-kim",
    company: {
      name: "N Company",
      logo: "/assets/testimonials-section/logo_6.webp",
    },
    quote: "Expert Webflow and SEO Services: Excellent Work, Great Results.",
    testimonial:
      "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
    author: {
      name: "David Kim",
      position: "N Company",
      avatar: "/assets/testimonials-section/david-kim.webp",
    },
  },
  {
    id: "karen-lee",
    company: {
      name: "LogoIpsum",
      logo: "/assets/testimonials-section/logo_2.webp",
    },
    quote: "Professional, Collaborative Web Design Experience with Arik.",
    testimonial:
      "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.",
    author: {
      name: "Karen Lee",
      position: "Biotech Technologies",
      avatar: "/assets/testimonials-section/karen-lee.webp",
    },
  },
  {
    id: "andrew-thompson",
    company: {
      name: "LogoIpsum",
      logo: "/assets/testimonials-section/logo_5.webp",
    },
    quote: "Expertise in Web Design: Second to None with Arik.",
    testimonial:
      "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
    author: {
      name: "Andrew Thompson",
      position: "Awescore Corporation",
      avatar: "/assets/testimonials-section/andrew-thompson.webp",
    },
  },
  {
    id: "emily-davis",
    company: {
      name: "Company Logo",
      logo: "/assets/testimonials-section/logo_4.webp",
    },
    quote: "Web Design and Content Solutions: Stand Out from the Crowd.",
    testimonial:
      "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provided excellent results. I highly recommend him for all your SEO needs.",
    author: {
      name: "Emily Davis",
      position: "Greenway Industries",
      avatar: "/assets/testimonials-section/emily-davis.webp",
    },
  },
  {
    id: "ryan-chen",
    company: {
      name: "BOGO",
      logo: "/assets/testimonials-section/logo_1.webp",
    },
    quote:
      "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
    testimonial:
      "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
    author: {
      name: "Ryan Chen",
      position: "Global Data Systems",
      avatar: "/assets/testimonials-section/ryan-chen.webp",
    },
  },
];

// Split testimonials into two columns for masonry layout
export const TESTIMONIALS_COLUMN_1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
export const TESTIMONIALS_COLUMN_2 = TESTIMONIALS.filter((_, i) => i % 2 !== 0);
