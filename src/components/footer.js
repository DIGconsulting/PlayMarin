import React from "react"
import Logo from "../images/Play.logo.ROUND2.jpeg"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "./layout"

const Footer = () => {
  return (
    <>
      <Layout>
        <div className="footer__addr">
          <img width={175} height={40} src={Logo} />
          <h2>Contact Us</h2>
          <p> P.O. Box 530 Sausalito, Ca 94966</p>
          <p>+1 (415) 686-5045</p>
          <p>paustin@playmarin.org</p>
          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </div>
        <div className="legal">
          <div className="legal__links"></div>

          <a href="https://www.gatsbyjs.org">
            Built and Maintained By OFF THE LAND SOFTWARE ©{" "}
            {new Date().getFullYear()}
            {` `}{" "}
          </a>
        </div>
      </Layout>
    </>
  )
}

export default Footer
