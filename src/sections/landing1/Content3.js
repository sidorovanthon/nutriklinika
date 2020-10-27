import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/png/pills.webp";
import StoreBadges from "../../components/Core/StoreBadges";

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: 0 32px 34px rgba(28, 27, 32, 0.2);
  position: absolute;
  top: 32%;
  left: 0%;
  transform: scale(0.85);
  @media ${device.sm} {
    left: 0;
    transform: scale(1);
  }
  @media ${device.md} {
    left: 0%;
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>

              <ShapeCard
                bg="warning"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-start"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="primary"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  <i class="fas fa-pills"></i>
                </Box>

                <Box pr="40px">
                  <Text fontSize={1} lineHeight="24px" opacity={0.7} mb={0}>
                    Важно!
                  </Text>
                  <Title variant="card" fontWeight={300} mb={0} fontSize={2}>
                    неправильное питание в&nbsp;период приема медикаментов может значительно снизить их&nbsp;эффективность
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col md="12" lg="6" className="order-lg-2 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Еда и&nbsp;лекарство</Title>
                <Text mb={4}>
                  Если Вы&nbsp;купили лекарство в&nbsp;аптеке или доктор Вам не&nbsp;сказал, что нельзя есть с&nbsp;этим лекарством, пользуйтесь разделом &laquo;Еда и&nbsp;лекарство&raquo; в&nbsp;приложении и&nbsp;повышайте эффективность лечения
                </Text>
                <StoreBadges></StoreBadges>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;