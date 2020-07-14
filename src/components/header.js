import React from "react"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Logo from "../images/playMarinLogo.png"
import "./hero.module.css"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #6512ae;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
    font-family: avenir;
  `
  const ExternalLink = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
    font-family: avenir;
    color: #000;
  `

  const activeStyle = {
    color: `#598BDD`,
    // color: `#0B7BFF`,
  }

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container
        style={{
          backgroundColor: "white",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            to="/"
            width={100}
            height={42}
            src={Logo}
            className="work"
            style={{
              marginBottom: "0px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            paddingLeft: "20px",
            paddingBottom: "10px!important",
          }}
        >
          <Navbar className="mr-auto">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="programs">Programs</StyledLink>
            <StyledLink to="support">Support</StyledLink>
            <StyledLink to="contact">Contact Us</StyledLink>
          </Navbar>
          <Button variant="outline-success">Donate</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
