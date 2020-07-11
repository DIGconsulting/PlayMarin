import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout.css"
import Logo from "../images/playMarinLogo.png"
import { Container, Row, Col, Button } from "react-grid-system"
import Sticky from "react-sticky-el"
import { ExternalLink } from "react-external-link"

const Header = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #6512ae;
    margin-right: 20px;
    border-bottom-width: 5px;
    font-family: avenir;
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
    color: #000000;
  `

  const activeStyle = {
    color: `#598BDD`,
    // color: `#0B7BFF`,
  }

  return (
    <div>
      <Sticky>
        <nav className="navbar">
          <ul className="left-ui">
            <li>
              <StyledLink to="/">
                <img
                  to="/"
                  width={100}
                  height={42}
                  src={Logo}
                  className="work"
                />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/" activeStyle={activeStyle}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/about/" activeStyle={activeStyle}>
                About
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/programs/" activeStyle={activeStyle}>
                Programs
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/support/" activeStyle={activeStyle}>
                Support
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/contact/" activeStyle={activeStyle}>
                Contact Us
              </StyledLink>
            </li>
          </ul>
          <ul className="donation-btn">
            <StyledLink>
              {" "}
              <a
                href="https://www.playmarin.org/#contact"
                style={{ color: "#fff" }}
              >
                Donate
              </a>
            </StyledLink>
          </ul>
        </nav>
      </Sticky>
    </div>
  )
}

export default Header