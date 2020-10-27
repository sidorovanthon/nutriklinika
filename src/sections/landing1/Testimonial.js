import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, A, Span } from "../../components/Core";

import imgCustomer1 from "../../assets/image/jpeg/l1-customer1.jpg";
import imgCustomer2 from "../../assets/image/jpeg/l1-customer2.jpg";
import imgCustomer3 from "../../assets/image/jpeg/l1-customer3.jpg";

const ContentCard = ({
  className,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box
    bg="light"
    border="1px solid"
    borderColor="border"
    p="25px"
    borderRadius={10}
    className={`${className}`}
    {...rest}
  >
    <Box className={`d-flex justify-content-between`}>
      <Box className="d-flex justify-content-center align-items-start" mr={3}>
        <img src={image} alt="" className="img-fluid" />
      </Box>
      <div className="flex-grow-1">
        <Title variant="card" mb={0}>
          {name}
        </Title>
        <Text fontSize={2}>{company}</Text>
      </div>
      <A href="#" fontSize="27px">
        <Span color="secondary">
          <i className="fab fa-apple"></i>
        </Span>
      </A>
    </Box>
    <Text color="dark" mt={4}>
      {children}
    </Text>
  </Box>
);

const Testimonial = () => (
  <>
    {/* <!-- testimonial section --> */}
    <Section>
      <Container>
        <Box pb={[4, null, null, 5]}>
          <Row className="justify-content-center">
            <Col lg="7" xl="6">
              <div className="section-title text-center">
                <Title>
                  Пользователи <br className="d-none d-md-block" /> оставляют отзывы
                </Title>
              </div>
            </Col>
          </Row>
        </Box>
        <Row className="justify-content-center">
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="JEF183"
              company="13.09.2020"
              image={imgCustomer1}
            >
              Это действительно работает! Страдаю гипертонией, но&nbsp;начал соблюдай рекомендации из&nbsp;приложение и&nbsp;давление стало повышаться реже. Рекомендации по&nbsp;питанию очень простые, всё понятно объяснено. В&nbsp;первые встречаю такое полезное приложение. Но&nbsp;ставлю 4 звезды <nobr>из-за</nobr> мелкого шрифта. Надеюсь, разработчики меня услышат и&nbsp;сделают шрифт крупнее
            </ContentCard>
          </Col>
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="пильмс"
              company="01.09.2020"
              image={imgCustomer1}
            >
              Установила по&nbsp;рекомендации. Приложение простое, но&nbsp;сколько в&nbsp;нем пользы! Здесь правильное питание рассматривается не&nbsp;только с&nbsp;точки зрения похудения, как во&nbsp;многих приложениях, а&nbsp;с&nbsp;позиции сохранения здоровья. Пять звезд для подробный разбор питания при заболеваниях и&nbsp;при приеме лекарств!&#127894;&#127894;&#127894;&#127894;&#127894;
            </ContentCard>
          </Col>
          <Col md="6" lg="4" className="mb-5">
            <ContentCard
              name="Марина6776"
              company="24.09.2020"
              image={imgCustomer1}
            >
              Приложение очень хорошее и&nbsp;удобное. Много различной информации о&nbsp;продуктах, рецепты и&nbsp;полезные советы. Мне очень помогло перейти на&nbsp;правильное питание. Очень рекомендую тем, кто хочет похудеть и&nbsp;начать правильно питаться
            </ContentCard>
          </Col>

          <Col xs="12" className="text-center mt-3">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <A
                href="https://apple.co/2H5lURU"
                target="_blank"
                fontSize={2}
                fontWeight={500}
                className="d-inline-flex align-items-center"
              >
                <Span color="secondary">
                  <i className="fas fa-comment-alt mr-2"></i>
                  <span>Читать все отзывы</span>
                </Span>
              </A>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Testimonial;
