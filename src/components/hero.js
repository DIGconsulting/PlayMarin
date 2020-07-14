import React from "react"
import classes from "./hero.module.css"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { ExternalLink } from "react-external-link"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./hero.module.css"

function Hero() {
  const { video } = useStaticQuery(graphql`
    query {
      video: file(relativePath: { eq: "playMarin.mp4" }) {
        videoH264 {
          path
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.Container}>
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className={classes.Video}
          fluid={false}
          playsInline
        >
          <source src={video.videoH264.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <Container>
            <Row className="justify-content-md-center" style={{marginTop: "11rem"}}>
              <div className="text-center" >
               <p style={{fontSize: "25px"}}>With the goal of closing the activity gap in Marin City while
                promoting diversity and inclusion throughout Marin County, Play
                Marin started 8 years ago with one Marin City basketball team of
                9 players.</p>
              </div>
            </Row>
            <Row className="justify-content-md-center">
              <div className="text-center">
                <p style={{fontSize: "25px"}}>Today, Play Marin reaches more than 300 kids annually throughout
                Marin with our mission of diversity and inclusion through Play.</p>
              </div>
            </Row>
            <Jumbotron style={{
              background: 'rgba(7, 58, 99, 0.5)'
            }}>
              <Row>
                <Col md={8}>
                  <h4
                    style={{
                      color: "white",
                    }}
                  >
                    Support PLAY MARIN Today!
                  </h4>
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Your support helps PLAY MARIN close the activity gap in
                    Marin City and provides a more diverse peer group for over
                    300 kids annually throughout Southern Marin Your support
                    helps Play Marin close the activity gap in Marin City and
                    provides a more diverse peer group for over 300 kids
                    annually throughout Southern Marin
                  </p>
                </Col>
                <Col
                  md={4}
                  sm={12}
                  style={{
                    color: "white",
                    fontFamily: "avenir",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h5
                    style={{
                      color: "white",
                    }}
                  >
                    Select An Amount:
                  </h5>
                  <ExternalLink href="https://www.paypal.me/playmarin/50">
                    <Button
                      variant="success"
                      style={{
                        width: "8rem",
                        height: "2.5rem",
                        marginTop: "10px",
                      }}
                    >
                      $ 50
                    </Button>
                  </ExternalLink>
                  <ExternalLink href="https://www.paypal.me/playmarin/100">
                    <Button
                      variant="success"
                      style={{
                        width: "8rem",
                        height: "2.5rem",
                        marginTop: "10px",
                      }}
                    >
                      $ 100
                    </Button>
                  </ExternalLink>
                  <ExternalLink href="https://www.paypal.me/playmarin/500">
                    <Button
                      variant="success"
                      style={{
                        width: "8rem",
                        height: "2.5rem",
                        marginTop: "10px",
                      }}
                    >
                      $ 500
                    </Button>
                  </ExternalLink>
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Hero
