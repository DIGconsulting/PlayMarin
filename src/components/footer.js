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
          paddingBottom: `50px`,
          backgroundImage: "linear-gradient(#558EDE, #6514AF)",
        }}
      >
        <Container fluid>
          <Row>
            <Col style={{ display: "flex" }}>
              <div>
                <img width={175} src={Logo} />
              </div>
              <div>
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
                {/* <ExternalLink>
                  {" "}
                  <a href="playmarin.org/#contact"> Donate</a>
                </ExternalLink> */}
              </div>
              <div className="legal">
                <div className="legal__Link"></div>

                <a href="">
                  Copyright &#169; {new Date().getFullYear()} Play Marin, a
                  <br />
                  California public benefit
                  <br />
                  coporation. All rights reserved
                </a>
              </div>
            </Col>
            <Col style={{ color: "white" }}>
              <h5>Follow PLAY Marin</h5>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#D3D3D3",
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
                    backgroundColor: "#D3D3D3",
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
                <p>
                  Sign up for our newletter today and stay up to date with
                  everything PLay Marin
                </p>
              </div>
              <div>
                <form method="post" action="contact.php">
                  <input type="email"></input>
                  <input type="submit" name="Sign Up"></input>
                </form>
                {/* <form action="#">
                  <label for="email">Enter your email:</label>
                  <input type="email" id="email" name="email">
                    Email
                  </input>
                  <input type="submit">Sign Up</input>
                </form> */}
              </div>
            </Col>
            <Col style={{ color: "white" }}>
              <p>
                Your support helps Play Marin close the actiivty gap in Marin
                City and provides a more diverse peer group fro over 300 kids
                annually throughout Sourthern Marin
              </p>
              <div>
                <div>$50</div>
                <div>
                  <form>
                    <input
                      type="radio"
                      id="Annually"
                      name="donation"
                      value="annually"
                    ></input>
                    <label for="annually">Annually</label>
                    <br />
                    <input
                      type="radio"
                      id="just-once"
                      name="donation"
                      value="just-once"
                    ></input>
                    <label for="just-once">Just Once</label>
                    <br />
                    <input type="submit" name="Support Play Marin"></input>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Footer
