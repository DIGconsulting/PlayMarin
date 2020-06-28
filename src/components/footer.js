import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/playMarinLogo.png"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "./layout"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, external } from "gatsby"
import { ExternalLink } from "react-external-link"

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
            <Col style={{ display: "flex", color: "white" }}>
              <div style={{ height: "6.5rem", display: "flex" }}>
                <img width={175} src={Logo} />
                <div style={{ lineHeight: "2.25", height: "11rem" }}>
                  <StyledLink to="/casestudy/" activeStyle={activeStyle}>
                    Home
                  </StyledLink>
                  <StyledLink to="/programs/" activeStyle={activeStyle}>
                    Programs
                  </StyledLink>
                  <StyledLink to="/about/" activeStyle={activeStyle}>
                    Support
                  </StyledLink>
                  <StyledLink to="/contact/" activeStyle={activeStyle}>
                    About
                  </StyledLink>
                  <StyledLink to="/contact/" activeStyle={activeStyle}>
                    Contact-Us
                  </StyledLink>
                </div>
              </div>
              <div
                className="legal"
                style={{ color: "white", fontSize: "12px", height: "3.5rem" }}
              >
                <a href="#" style={{ color: "white", fontSize: "12px" }}>
                  Copyright &#169; {new Date().getFullYear()} Play Marin, a
                  <br />
                  California public benefit
                  <br />
                  coporation. All rights reserved
                </a>
              </div>
            </Col>
            <Col style={{ color: "white", width: "2rem" }}>
              <h5>Follow PLAY Marin</h5>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(167, 169, 227, .5)",
                    width: "2rem",
                    textAlign: "center",
                    marginRight: ".5rem",
                    color: "white",
                  }}
                >
                  FB
                </p>
                <p
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgba(167, 169, 227, .5)",
                    width: "2rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  IG
                </p>
              </div>
              <div>
                <h6>Stay in touch</h6>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Sign up for our newletter today and
                  <br /> stay up to date with everything Play <br />
                  Marin
                </p>
              </div>
              <div>
                <form method="post" action="contact.php">
                  <input
                    type="email"
                    style={{
                      backgroundColor: "rgba(167, 169, 227, .5)",
                      color: "white",
                    }}
                    value="Email"
                  ></input>
                  <input
                    type="submit"
                    name="Sign Up"
                    value="Sign Up"
                    style={{
                      backgroundColor: "rgba(167, 169, 227, .5)",
                      color: "white",
                    }}
                  ></input>
                </form>
              </div>
            </Col>
            <Col style={{ color: "white" }}>
              <p>
                Your support helps Play Marin close
                <br /> the actiivty gap in Marin City and
                <br /> provides a more diverse peer group for
                <br /> over 300 kids annually throughout
                <br /> Sourthern Marin
              </p>
              <div>
                <form>
                  <div style={{ display: "flex" }}>
                    <center>
                      <div
                        style={{
                          backgroundColor: "rgba(167, 169, 227, .5)",
                          height: "1.5rem",
                          width: "5rem",
                          color: "white",
                          fontWeight: "600",
                          marginRight: ".25rem",
                        }}
                      >
                        $50
                      </div>
                    </center>
                    <div
                      style={{
                        width: "5rem",
                        lineHeight: ".5rem",
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
                          fontSize: "10px",
                          marginBottom: "0px",
                          fontWeight: "600",
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
                          fontSize: "10px",
                          marginBottom: "0px",
                          fontWeight: "600",
                        }}
                      >
                        Just Once
                      </label>
                      <br />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Support Play Marin"
                    style={{
                      marginTop: ".25rem",
                      width: "9.5rem",
                      display: "relative",
                      backgroundColor: "#007E26",
                      borderColor: "#fff",
                      color: "white",
                      fontSize: "10px",
                      paddingTop: ".25rem",
                      paddingBottom: ".25rem",
                      fontWeight: "600",
                    }}
                  ></input>
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
