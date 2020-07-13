import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/header.js"
import Hero from "../components/hero.js"
import Timeline from "../components/timeline"
import Homepagethreeup from "../components/homepagethreeup"
import Media from "react-media"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/hero.module.css"
import { graphql, useStaticQuery } from "gatsby"
import YouTube from "react-youtube"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

function IndexPage() {
  const opts = {}
  const { video } = useStaticQuery(graphql`
    query {
      video: youtubeVideo {
        videoId
      }
    }
  `)

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Navbar />
      <Hero />

      <Container
        fluid
        style={{
          paddingTop: "0px",
        }}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <YouTube videoId={video.videoId} opts={opts} />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <h1>Everyone wins with Play Marin</h1>
            <p>
              PLAY Marin provides sports and other extracurricular activities to
              intentionally give diverse ethnic and socioeconomic backgrounds
              the opportunity to learn and grow together through play.
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
        <Row
          style={{
            color: "white",
            backgroundImage: "linear-gradient(#89D4CF, #734AE8)",
            paddingTop: `50px`,
            paddingBottom: `50px`,
          }}
        >
          <Col md={12} className="text-center">
            <p
              className="text-center"
              style={{
                fontSize: "30px",
              }}
            >
              <Container>
                "It's important that children spread amongst the many small
                towns in Marin have the opportunity to learn about others, not
                by competing against them, but instead through the lens of
                playing with them."
              </Container>
            </p>
            <p
              style={{
                fontSize: "10px",
                marginBottom: "0",
                fontSize: "15px",
              }}
            >
              Paul Austin
            </p>
            <p style={{ fontSize: "10px" }}>Founder, Play Marin</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row
          style={{
            backgroundImage: "linear-gradient(#0BAB64, #3BB78F)",

            paddingTop: `60px`,
            paddingBottom: `60px`,
          }}
        >
          <Container>
            <Col className="text-center">
              <h2
                style={{
                  color: `#fff`,
                }}
              >
                Play and diversity are essential for a 21st-century education
              </h2>
              <div
                style={{
                  color: `#fff`,
                }}
              >
                <p>
                  Play Marin envisions Marin as an integrated and unified
                  community. The lessons learned through the play and
                  experiences we provide instill valuable skills, create
                  friendships and enhances well being and solidarity among the
                  young people of Marin, improving their prospects for a
                  successful future and benefiting the health of our broader
                  Marin community.
                </p>
              </div>
            </Col>
          </Container>
          <Col lg={12} md={12}>
            <Homepagethreeup />
          </Col>
        </Row>
      </Container>
      <Container>
        <center>
          <Media query="(min-width: 717px)" render={() => <Timeline />} />
        </center>
      </Container>

      <Footer />
    </>
  )
}

export default IndexPage
