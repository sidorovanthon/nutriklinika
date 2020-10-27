import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Наша миссия: долголетие и&nbsp;хорошее качество жизни
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              Для того, чтобы жить, нам нужна энергия. Природа обо всем позаботилась, вложив в&nbsp;определенные продукты конкретные субстанции. Наша задача&nbsp;&mdash; лучше их&nbsp;знать и&nbsp;использовать для своего блага. В&nbsp;этом приложении Вы&nbsp;найдете массу интересной информации, которая позволит Вам осознанно подходить к&nbsp;тому, что Вы&nbsp;едите, а&nbsp;в&nbsp;случае болезни незамедлительно перейти на&nbsp;правильный режим питания.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
