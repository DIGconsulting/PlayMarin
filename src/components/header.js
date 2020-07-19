import React from "react"
import styled from "styled-components"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/playMarinLogo.png"
import { Link } from "gatsby"
import "./hero.module.css"


const Header = () => {

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
        style={{
          padding: "0px 0px!important",
        }}
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
            <Link  to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact Us</Link>
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
