import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/play_logo_WHT.svg"
import { Container, Row, Col } from "react-bootstrap"
import Newsletter from "./newsletter.js"
import Layout from "./layout"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./form.module.css"
import { ExternalLink } from "react-external-link"
import { Link } from "gatsby"

const Footer = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
    font-family: avenir;
    color: #fff;
  `
  const ExternalLink = styled(Link)`
    padding-left: 20px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
    font-family: avenir;
    color: #000;
  `

  const activeStyle = {
    color: `#0B7BFF`,
  }
  return (
    <>
      <Jumbotron
        fluid
        style={{
          marginBottom: `0px`,
          paddingTop: `50px`,
          paddingBottom: `50px`,
          backgroundImage: "linear-gradient(#558EDE, #6514AF)",
        }}
      >
        <Container fluid>
          <Row>
            <Col md={4} sm={12} style={{ color: "white" }}>
              <div>
                <img
                  width={175}
                  src={Logo}
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                    fontFamily: "avenir",
                  }}
                />
                <div style={{}}>
                  <StyledLink to="/" activeStyle={activeStyle}>
                    Home
                  </StyledLink>
                  <StyledLink to="/programs/" activeStyle={activeStyle}>
                    Programs
                  </StyledLink>
                  <StyledLink to="/support/" activeStyle={activeStyle}>
                    Support
                  </StyledLink>
                  <StyledLink to="/about/" activeStyle={activeStyle}>
                    About
                  </StyledLink>
                  <StyledLink to="/support/" activeStyle={activeStyle}>
                    Contact-Us
                  </StyledLink>
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                    width: "300px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "white",
                      fontSize: "12px",
                      fontFamily: "avenir",
                    }}
                  >
                    Copyright &#169; {new Date().getFullYear()} Play Marin, a
                    California public benefit coporation. All rights reserved
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12} style={{ color: "white", paddingTop: "50px" }}>
              <h3 style={{}}>Follow PLAY Marin</h3>
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <p
                  style={{
                    backgroundColor: "rgba(167, 169, 227, .5)",
                    width: "2rem",
                    textAlign: "center",
                    marginRight: ".5rem",
                    color: "white",
                    fontFamily: "avenir",
                  }}
                >
                  FB
                </p>
                <p
                  style={{
                    backgroundColor: "rgba(167, 169, 227, .5)",
                    width: "2rem",
                    textAlign: "center",
                    color: "white",
                    fontFamily: "avenir",
                  }}
                >
                  IG
                </p>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontFamily: "avenir",
                }}
              ></div>
              <div>
                <Newsletter />
              </div>
            </Col>
            <Col
              md={4}
              sm={12}
              style={{
                color: "white",
                paddingTop: "50px",
                paddingBottom: "50px",
                fontFamily: "avenir",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <p>
                Your support helps Play Marin close
                <br /> the actiivty gap in Marin City and
                <br /> provides a more diverse peer group for
                <br /> over 300 kids annually throughout
                <br /> Sourthern Marin
              </p>
              <h5>Select An Amount:</h5>
              <ExternalLink href="https://www.paypal.me/playmarin/50">
                    <button
                      type="button"
                      value="Support Play Marin"
                      style={{
                        marginTop: ".10rem",
                        width: "5.0rem",
                        display: "relative",
                        backgroundColor: "#007E26",
                        color: "white",
                        fontSize: "16px",
                        paddingTop: "0.45rem",
                        paddingBottom: "0.45rem",
                        fontWeight: "600",
                        fontFamily: `avenir`,
                        borderColor: "#007E26",
                      }}
                    >
                      $ 50.00
                    </button>
                </ExternalLink>
                <ExternalLink href="https://www.paypal.me/playmarin/100">

                    <button
                      type="button"
                      value="Support Play Marin"
                      style={{
                        marginTop: "0.50rem",
                        width: "5.0rem",
                        display: "relative",
                        backgroundColor: "#007E26",
                        color: "white",
                        fontSize: "16px",
                        paddingTop: "0.45rem",
                        paddingBottom: "0.45rem",
                        fontWeight: "600",
                        fontFamily: `avenir`,
                        borderColor: "#007E26",
                      }}
                    >
                      $ 100
                    </button>
                  </ExternalLink>
                  <ExternalLink href="https://www.paypal.me/playmarin/500">
                    <button
                      type="button"
                      value="Support Play Marin"
                      style={{
                        marginTop: "0.50rem",
                        width: "5.0rem",
                        display: "relative",
                        backgroundColor: "#007E26",
                        color: "white",
                        fontSize: "16px",
                        paddingTop: "0.45rem",
                        paddingBottom: "0.45rem",
                        fontWeight: "600",
                        fontFamily: `avenir`,
                        borderColor: "#007E26",
                      }}
                    >
                      $ 500
                    </button>
              </ExternalLink>

            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Footer
