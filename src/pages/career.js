import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/career/Content";
import Feature from "../sections/career/Feature";
import Roles from "../sections/career/Roles";

import { graphql } from 'gatsby'

const Career = ({ data }) => {

  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Career">
          <p>{/*data.prismicHomepage.data.title.text*/}</p>
          <p>{/*data.prismicHomepage.data.hero_text.text*/}</p>
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
/*
export const query = graphql`
{
  prismicHomepage {
    id
    data {
      title {
        text
      }
      hero_text {
        text
      }
    }
  }
}`
*/
export default Career;