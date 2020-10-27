import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/common/Hero";

const FormStyled = styled.form``;

const Contact1 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Мы на&nbsp;связи">
          Если у&nbsp;Вас есть вопрос или предложение по&nbsp;приложению, заполните форму обратной связи
        </Hero>
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <FormStyled>
                  <Box mb={5}>
                    <Title>Оставьте вопрос или предложение</Title>
                  </Box>
                  <Box mb={3}>
                    <Input type="text" placeholder="Ваше имя" />
                  </Box>
                  <Box mb={3}>
                    <Input type="email" placeholder="Ваш email" />
                  </Box>

                  <Box mb={3}>
                    <Input type="text" placeholder="Тема" />
                  </Box>

                  <Box mb={3}>
                    <Input
                      type="text"
                      as="textarea"
                      placeholder="Оставьте сообщение"
                      rows={4}
                    />
                  </Box>

                  <Button width="100%" type="submit" borderRadius={10}>
                    Отправить сообщение
                  </Button>
                </FormStyled>
              </Col>
              <Col
                lg={5}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                {/*
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Call us
                  </Title>
                  <Text>+1-492-4918-395</Text>
                  <Text>+14-394-409-591</Text>
                </Box>
                */}
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Или напишите на email
                  </Title>
                  <Text>i@nutriklinika.ru</Text>
                </Box>
                {/*
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Contact us
                  </Title>
                  <Text>34 Madison Street,</Text>
                  <Text>NY, USA 10005</Text>
                </Box>
                */}
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact1;
