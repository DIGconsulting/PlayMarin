import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout.css"
import Logo from "../images/playMarinLogo.png"

const Header = () => {
  const Link = styled.a`
    padding-left: 10px;
    cursor: pointer;
  `

  return (
    <>
      <nav className="navbar">
        <ul className="left-ui">
          <li>
            <img width={100} height={42} src={Logo} />
          </li>
          <Link className="home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/casestudy">PLAY Study</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
        <ul className="right-ui">
          <Link className="work">Login</Link>
          <Link className="points">Donate</Link>
          <li>
            <i className="fas fa-bell bell"></i>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
