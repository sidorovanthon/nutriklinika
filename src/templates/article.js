import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import PostDetails from "../sections/blog/PostDetails";
import Comments from "../sections/blog/Comments";
import Sidebar from "../sections/blog/Sidebar";

const Page = ({ data }) => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">
                    {data.allPrismicArticle.nodes[0].data.title[0].text}
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
                <PostDetails />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};

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

export default Page;