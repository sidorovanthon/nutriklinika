import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box } from "../Core";
import Logo from "../Logo";

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
    dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const Footer = ({ isDark = true }) => {
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box bg={isDark ? "dark" : "light"}>
        <Container>
          <Box
            css={`
              padding: 80px 0 60px;
            `}
          >
            <Row className="justify-content-center">
              <Col lg="2" md="4">
                <Logo white={isDark} />
              </Col>
              <Col lg="10" md="8" className="mt-5 mt-lg-0">
                <Row>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        О приложении
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/about" target="_blank">
                            Миссия и консультанты
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/nutriklinika" target="_blank" rel="noopener noreferrer">
                            Telegram-канал: новости медицины каждый день
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Защита пользователей
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
                            Политика конфиденциальности
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  {/*
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Полезное
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/#" target="_blank">
                            Рецепты
                          </a>
                        </li>
                        <li>
                          <a href="/#" target="_blank">
                            Статьи
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  */}
                  <Col xs="6" lg="3">
                    <div className="mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Связаться с нами
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <a href="/contact-1" target="_blank" rel="noopener noreferrer">
                            Контакты
                          </a>
                        </li>
                        <li>
                          <a href="mailto:i@nutriklinika.ru" target="_blank" rel="noopener noreferrer">
                            i@nutriklinika.ru
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/nutriklinika/" target="_blank" rel="noopener noreferrer">
                            Instagram
                          </a>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
          <CopyRightArea dark={isDark ? 1 : 0}>
            <Row className="align-items-center">
              <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
                <p>&copy; 2020 NutriKlinika, All Rights Reserved</p>
              </Col>
              <Col sm="6" className="text-sm-right text-center">
                <ul className="social-icons">
                  <li>
                    <a href="https://t.me/nutriklinika" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nutriklinika/" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/foodinfobank" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </CopyRightArea>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
