import React from "react"
import Logo from "../images/Play.logo.ROUND2.jpeg"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer">
          <div className="footer__addr">
            <img width={175} height={40} src={Logo} />
            <h2>Contact</h2>
            5534 Somewhere In. The World 22193-10212
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">Media</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Online</a>
                </li>

                <li>
                  <a href="#">Print</a>
                </li>

                <li>
                  <a href="#">Alternative Ads</a>
                </li>
              </ul>
            </li>

            <li className="nav__item nav__item--extra">
              <h2 className="nav__title">Technology</h2>

              <ul className="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Hardware Design</a>
                </li>

                <li>
                  <a href="#">Software Design</a>
                </li>

                <li>
                  <a href="#">Digital Signage</a>
                </li>

                <li>
                  <a href="#">Automation</a>
                </li>

                <li>
                  <a href="#">Artificial Intelligence</a>
                </li>

                <li>
                  <a href="#">IoT</a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="legal">
            <div className="legal__links"></div>

            <a href="https://www.gatsbyjs.org">
              Built and Maintained By OFF THE LAND SOFTWARE ©{" "}
              {new Date().getFullYear()}
              {` `}{" "}
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Footer
