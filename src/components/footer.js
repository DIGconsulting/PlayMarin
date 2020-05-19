import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/playMarinLogo.png"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "./layout"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
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
    color: #000;
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
          paddingBottom: `50px`
        }}
      >
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="footer__addr">
                <img width={175} src={Logo} />
                <p> P.O. Box 530 Sausalito, Ca 94966</p>
                <p>+1 (415) 686-5045</p>
                <p>paustin@playmarin.org</p>
                <a className="footer__btn" href="mailto:example@gmail.com">
                  Email Us
                </a>
              </div>
            </Col>
            <Col md="auto">
              <div>
                <h6>
                  <b>Quick Link</b>
                </h6>
                  <StyledLink to="/casestudy/" activeStyle={activeStyle}>Play Study</StyledLink>
                  <StyledLink to="/programs/" activeStyle={activeStyle}>Programs</StyledLink>
                  <StyledLink to="/about/" activeStyle={activeStyle}>Board</StyledLink>
                  <ExternalLink href="https://www.playmarin.org/#contact" activeStyle={activeStyle}>Donate</ExternalLink>
                  <StyledLink to="/contact/" activeStyle={activeStyle}>Contact-Us</StyledLink>
              </div>
            </Col>
          </Row>

          <div className="legal">
            <div className="legal__Link"></div>

            <a href="">
              Built and Maintained By OFF THE LAND SOFTWARE ©{" "}
              {new Date().getFullYear()}
              {` `}{" "}
            </a>
          </div>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Footer
