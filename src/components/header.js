import React from "react"
import { Link }from 'gatsby';
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout.css"
import Logo from "../images/playMarinLogo.png"

const Header = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    cursor: pointer;
     text-decoration: none;
     color: #000;
     margin-right: 20px;
     border-bottom-width: 5px;
     position: relatve;


  `;


const activeStyle = {
  color: `#555`,
  borderBottom: `2px solid #000`,
}

  return (
    <>
      <nav className="navbar">
        <ul className="left-ui">
          <li>
          <StyledLink to="/">
            <img to="/" width={100} height={42} src={Logo} className="work" />
            </StyledLink >
          </li>
          <StyledLink to="/about/" activeStyle={activeStyle}>About</StyledLink>
          <StyledLink to="/casestudy" activeStyle={activeStyle}>PLAY Study</StyledLink>
          <StyledLink to="/programs/" activeStyle={activeStyle}>Programs</StyledLink>
          <StyledLink to="/gallery/" activeStyle={activeStyle}>Gallery</StyledLink>
          <StyledLink to="/contact/" activeStyle={activeStyle}>Contact Us</StyledLink>
        </ul>
        <ul className="right-ui">
          <StyledLink to="/" className="work">Login</StyledLink>
          <StyledLink to="/" className="points">Sign up</StyledLink>
          <li>
            <i className="fas fa-bell bell"></i>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
