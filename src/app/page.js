//src\app\page.js

import { AboutSection } from "@/components/section/homepage/AboutSection/AboutSection";
import Hero from "@/components/section/homepage/hero-section/Hero";
import LogoSection from "@/components/section/homepage/logo-section/LogoSection";
import ProcessSection from "@/components/section/homepage/process-section/ProcessSection";
import ProcessStepsSection from "@/components/section/homepage/process-steps-section/ProcessStepsSection";
import ServiceSection from "@/components/section/homepage/service-section/ServiceSection";
import TestimonialsSection from "@/components/section/homepage/testimonials-section/TestimonialsSection";
import WorkSection from "@/components/section/homepage/work-section/WorkSection";
import CTASection from "@/components/shared/components/CTASection";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero />
      <LogoSection />
      <ServiceSection />
      <WorkSection />
      <ProcessSection />
      <ProcessStepsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default Homepage;
