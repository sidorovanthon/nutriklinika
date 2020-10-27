import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="NutriKlinika">
          Первое приложение о&nbsp;сбалансированном питании на&nbsp;основе научных знаний и&nbsp;мнений ведущих специалистов
        </Hero>
        <Content />
        <Team />
        {/*
        <CTA />
        */}
      </PageWrapper>
    </>
  );
};
export default About;
