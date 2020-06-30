import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/playMarinLogo.png"
import { Container, Row, Col } from "react-bootstrap"
import Newsletter from "./newsletter.js"
import Layout from "./layout"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, external } from "gatsby"
import { ExternalLink } from "react-external-link"
import styles from "./form.module.css"

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
              }}
            >
              <p>
                Your support helps Play Marin close
                <br /> the actiivty gap in Marin City and
                <br /> provides a more diverse peer group for
                <br /> over 300 kids annually throughout
                <br /> Sourthern Marin
              </p>
              <div>
                <form>
                  <div style={{ display: "flex", paddingTop: "20px" }}>
                    <center>
                      <label
                        className={styles.label}
                        style={{
                          paddingRight: "20px",
                        }}
                      >
                        <input
                          type="input"
                          name="donation"
                          placeholder=" $ Enter Amount"
                          fontFamily="Avenir"
                        />
                      </label>
                    </center>
                    <div
                      style={{
                        width: "5rem",
                        lineHeight: ".3rem",
                      }}
                    >
                      <input
                        type="radio"
                        id="Annually"
                        name="donation"
                        value="anually"
                        backgroundColor="#838E9E"
                        style={{
                          marginRight: ".25rem",
                        }}
                      ></input>
                      <label
                        for="anually"
                        style={{
                          fontSize: "15px",
                          marginBottom: "10px",
                          fontWeight: "600",
                          fontFamily: `avenir`,
                        }}
                      >
                        Anually
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="just-once"
                        name="donation"
                        value="just-once"
                        style={{
                          marginRight: ".25rem",
                        }}
                      ></input>
                      <label
                        for="just-once"
                        style={{
                          fontSize: "15px",
                          marginBottom: "0px",
                          fontWeight: "600",
                          fontFamily: `avenir`,
                        }}
                      >
                        Just Once
                      </label>
                      <br />
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Support Play Marin"
                    style={{
                      marginTop: ".10rem",
                      width: "9.0rem",
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
                    Support Play Marin
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Footer
