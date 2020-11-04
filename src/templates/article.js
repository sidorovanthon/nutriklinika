import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
//import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";

const Page = ({ data }) => {
/*
  const prismicContent = data.allPrismicArticles.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node
*/
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">
                    {/*document.data.title[0].text*/}
                </Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <Link to="/">Jan 14, 2020 </Link>
                  </Text>
                  <Text mr={3}>
                    <Link to="/">Technology</Link>
                  </Text>
                  <Text>
                    <Link to="/">David Jones</Link>
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Row>
            <Col lg="4" className="">
                <Sidebar />
              </Col>
              <Col lg="8" className="mb-5">
                {/*document.data.content[1].text*/}
                {/*Page.allPrismicArticle.nodes[0].data.content[1].text*/}
                <PostDetails />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};

/*
export const query = graphql`
query PageQuery($uid: String)
{
    allPrismicArticles(filter: {uid: {eq: $uid}}) {
      edges {
        node {
          data {
            body {
              __typename
              ... on PrismicArticlesBodyText {
                id
                slice_type
                slice_label
                primary {
                  text {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
}
`
*/
/*
export const query = graphql`
query PageQuery($uid: String)
{
    allPrismicArticle(filter: {uid: {eq: $uid}}) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            content {
              text
            }
          }
        }
      }
    }
}
`
*/
export default Page;