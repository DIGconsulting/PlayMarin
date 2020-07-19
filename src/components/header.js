import React from "react"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/playMarinLogo.png"
import { Link } from "gatsby"
import "./hero.module.css"


const Header = () => {
  const StyledLink = styled(Link)`
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    color: #6512ae;
    margin-right: 20px;
    border-bottom-width: 5px;
    font-family: avenir;
  `


  const activeStyle = {
    color: `#598BDD`,
    // color: `#0B7BFF`,
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <Navbar.Brand>
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
          style={{
            backgroundColor: "white",
          }}
        >
          <Nav className="mr-auto">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/programs">Programs</StyledLink>
            <StyledLink to="/support">Support</StyledLink>
            <StyledLink to="/contact">Contact Us</StyledLink>
          </Nav>
          <Link to="/support">
            <Button variant="outline-success">Donate</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
