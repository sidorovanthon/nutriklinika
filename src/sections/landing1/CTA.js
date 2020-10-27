import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
} from "../../components/Core";

import imgOval from "../../assets/image/png/l1-cta-oval.png";
import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";
import StoreBadges from "../../components/Core/StoreBadges";

const LeftCard = styled(Box)`
  position: absolute;
  top: 0;
  left: 0px;
`;

const RightCard = styled(Box)`
  position: absolute;
  top: 0;
  right: -275px;
`;

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Section bg="dark" className="position-relative">
      <LeftCard
        data-aos="fade-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgOval} alt="" className="img-fluid" />
      </LeftCard>
      <RightCard>
        <img src={svgCurve} alt="" className="img-fluid" />
      </RightCard>
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" xl="6">
            <Box mb={5} className="text-center">
              <Title color="light">Займись своим здоровьем сейчас!</Title>
              <Text color="light" opacity={0.7}>
                Скачай приложение и веди здоровый образ жизни вместе с нами
              </Text>
            </Box>
            <div><StoreBadges></StoreBadges></div>
            {/*}
            <form>
              <Box mb={3}>
                <Input type="text" placeholder="Your name" />
              </Box>
              <Box mb={3}>
                <Input type="email" placeholder="Your email" />
              </Box>

              <Button width="100%" type="submit" borderRadius={10}>
                Get Started
              </Button>
            </form>
*/}

          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
