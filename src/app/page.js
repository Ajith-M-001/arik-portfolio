//src\app\page.js

import Hero from "@/components/section/homepage/hero-section/Hero";
import LogoSection from "@/components/section/homepage/logo-section/LogoSection";
import ProcessSection from "@/components/section/homepage/process-section/ProcessSection";
import ProcessStepsSection from "@/components/section/homepage/process-steps-section/ProcessStepsSection";
import ServiceSection from "@/components/section/homepage/service-section/ServiceSection";
import WorkSection from "@/components/section/homepage/work-section/WorkSection";
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
    </>
  );
};

export default Homepage;
