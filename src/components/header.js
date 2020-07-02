import React from "react";
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../images/playMarinLogo.png"
import styled from "@emotion/styled"
import { ExternalLink } from "react-external-link"


const Navbar = () => {
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


    <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
    <div className="container"> <a className="navbar-brand d-flex align-items-center" href="#">

    <img
      to="/"
      width={100}
      height={42}
      src={Logo}
      className="work"
    />
    </a> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
    <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbar4">
    <ul className="navbar-nav mr-auto pl-lg-4">
    <li>
      <StyledLink to="/" activeStyle={activeStyle}>
        Home
      </StyledLink>
    </li>
    <li>
      <StyledLink to="/about" activeStyle={activeStyle}>
        About
      </StyledLink>
    </li>
    <li>
      <StyledLink to="/programs" activeStyle={activeStyle}>
        Programs
      </StyledLink>
    </li>
    <li>
      <StyledLink to="/support" activeStyle={activeStyle}>
        Support
      </StyledLink>
      <StyledLink to="/contact" activeStyle={activeStyle}>
        Contact Us
      </StyledLink>
    </li>


    <li className="nav-item px-lg-2 dropdown d-menu">
    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-caret-square-down"></i></span>Dropdown
    <svg  id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
    </a>
    <div className="dropdown-menu shadow-sm sm-menu" aria-labelledby="dropdown01">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
    </div>
    </li>
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
    </ul>
    <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
    <li className="nav-item"> <a className="nav-link" href="#">
      <i className="fab fa-twitter"></i><span className="d-lg-none ml-3">Twitter</span>
    </a> </li>
    <li className="nav-item"> <a className="nav-link" href="#">
    <i className="fab fa-facebook"></i><span className="d-lg-none ml-3">Facebook</span>
    </a> </li>
    <li className="nav-item"> <a className="nav-link" href="#">
    <i className="fab fa-instagram"></i><span className="d-lg-none ml-3">Instagram</span>
    </a> </li>
      <li className="nav-item"> <a className="nav-link" href="#">
    <i className="fab fa-linkedin"></i><span className="d-lg-none ml-3">Linkedin</span>
    </a> </li>
    </ul>
    </div>
    </div>
    </nav>


  )
}

export default Navbar
