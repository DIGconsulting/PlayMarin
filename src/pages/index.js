import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import Hero from "../components/hero.js"
import Timeline from "../components/timeline"
import Mobilenav from "../components/mobilenav"
import Homepagethreeup from "../components/homepagethreeup"
import Media from "react-media"
import PlayImg from "../images/hero_image.jpg"
import PaulProfileImg from "../images/paul.jpeg"
import "bootstrap/dist/css/bootstrap.min.css"
import uploadedFileLink from "../images/playstudy.pdf"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ResponsiveEmbed from "react-responsive-embed"

const IndexPage = () => {
  return (
    <>
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(min-width: 599px)" render={() => <Header />} />
    <Hero />

      <Container fluid  style={{
            paddingTop: "0px",
      }}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} style={{
              paddingRight: "0px",
              paddingLeft: "0px"
        }}>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/p0LfbN2J4c8"
            ratio="5:4"
          />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}
          style={{
            backgroundColor: "#992168",
            color: "white",
            width: "50%",
            padding: "7rem",
          }}
          >
              <h1>Everyone wins with Play Marin</h1>
              <p>
                PLAY Marin provides sports and other extracurricular activities
                to intentionally give diverse ethinic and socioeconomic
                backgrounds the opportunity to learn and grow together through
                play.
              </p>
              <button
                style={{
                  width: "15rem",
                  height: "2.5rem",
                  color: "#992168",
                  borderColor: "#992168",
                }}
              >
                Learn More
              </button>
        </Col>
    </Row>
      </Container>

      <Container fluid>
      <Row       style={{
                    color: "white",
                        backgroundImage: "linear-gradient(#89D4CF, #734AE8)",
                        paddingTop: `50px`,
                        paddingBottom: `50px`
                      }}>

      <Col  md={{ span: 6, offset: 2 }}>

            <p
              style={{
                paddingLeft: "10rem",
                fontSize: "22px"
              }}
            >
              "It's important that children spread amounst the <br />
              many small towns in Marin have the opportunity to <br />
              learn about others, not by competing with them, but <br />
              instead through the lens of playing with them."
            </p>
            <p
              style={{
                paddingLeft: "10rem",
                fontSize: "10px",
                marginBottom: "0",
                  fontSize: "12px"
              }}
            >
              Paul Austin
            </p>
            <p style={{ paddingLeft: "10rem", fontSize: "10px" }}>
              Founder, Play Marin
            </p>
          </Col>
          <Col lg={3} md={3}>
            <img
              src={PaulProfileImg}
              alt="paul's profile pic"
              style={{ borderRadius: "100%", height: "10rem", width: "10rem"}}
            />
          </Col>
        </Row>
      </Container>
      <Container
        fluid

      >
      <Row
      style={{
        backgroundImage: "linear-gradient(#0BAB64, #3BB78F)",

              paddingRight: `50px`,
              paddingLeft: `50px`,
              paddingTop: `60px`,
              paddingBottom: `60px`,

              }}>
        <Col lg={{ span: 12, offset: 1 }}>

            <h1  style={{
              color: `#fff` }}>
              Play and diversigy are essential for a 21st century education
            </h1>
          <div style={{
            color: `#fff`,
            width: `80%`,
          }}>
            <p>
              Play Marin envisions Marin as an integrated and unifed community.
              The lessions learned through the play and expereinces we provide
              instills valuable skills, create friendships, and enhances well
              being and solidarity amoung the young people of Marin, improving
              their prospects for a successful future and benefiting the health
              of our broader Marin community.{" "}
            </p>
          </div>
          </Col>

          <Col lg={12} md={12}>
          <Homepagethreeup />

    </Col>
      </Row>
      </Container>
      <Container>
        <center>
          <Timeline />
        </center>
      </Container>

      <Footer />
    </>
  )
}

export default IndexPage
