/*
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
          <p>{data.allPrismicArticle.nodes[0].data.title.text}</p>
        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};

export const query = graphql`
query PageQuery($uid: String) {
    allPrismicArticle(filter: {uid: {eq: $uid}}) {
        nodes {
          id
          uid
          data {
            title {
              text
            }
          }
        }
      }
}`

export default Career;
*/
import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from "../components/PageWrapper";

const Page = ({ data }) => {
  return (
    <PageWrapper>
      <main className="container">
        <h1>Prismic content: {data.allPrismicArticle.nodes[0].data.title[0].text}</h1>
        
      </main>
    </PageWrapper>
  )
}

export const query = graphql`
query PageQuery($uid: String)
{
    allPrismicArticle(filter: {uid: {eq: $uid}}) {
        nodes {
            id
            uid
            data {
                title {
                    text
                }
            }
        }
    }
}
`

export default Page