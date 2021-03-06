import React from "react";
import Hero from "../sections/landing1/Hero";
//import Clients from "../sections/landing1/Clients";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Content3 from "../sections/landing1/Content3";
import Testimonial from "../sections/landing1/Testimonial";
import CTA from "../sections/landing1/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Feature />
        <Content3 />
        <Content1 />
        <Content2 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
