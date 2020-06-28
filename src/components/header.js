import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout.css"
import Logo from "../images/playMarinLogo.png"
import { Container, Row, Col, Button } from "react-grid-system"
import { ExternalLink } from "react-external-link"
import Sticky from 'react-sticky-el';

const Header = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
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
    color: #000;
  `

  const activeStyle = {
    color: `#0B7BFF`,
  }

  return (
    <>
    <Sticky>
      <nav className="navbar">
        <ul className="left-ui">
          <li>
            <StyledLink to="/">
              <img to="/" width={100} height={42} src={Logo} className="work" />
            </StyledLink>
          </li>

          <StyledLink to="/casestudy" activeStyle={activeStyle}>
            PLAY Study
          </StyledLink>
          <StyledLink to="/about/" activeStyle={activeStyle}>
            Board
          </StyledLink>
          <StyledLink to="/programs/" activeStyle={activeStyle}>
            Programs
          </StyledLink>
          <StyledLink to="/contact/" activeStyle={activeStyle}>
            Contact Us
          </StyledLink>
        </ul>
        <ul className="right-ui">
        <StyledLink> <a href="https://www.playmarin.org/#contact"> Donate</a></StyledLink>
          <li>
            <i className="fas fa-bell bell"></i>
          </li>
        </ul>
      </nav>
 </Sticky>
    </>
  )
}

export default Header
