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
          <Card
            className="text-center"
            style={{
              color: "black",
              width: "1000px",
              display: "flex",
              marginBottom: "-17em",
              height: "300px",
              paddingBottom: "0px",
              justifyContent: "space-around",
            }}
          >
            <Card.Body
              style={{
                Height: "0px!important",
              }}
            >
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={8}>
                    <Tab.Content
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <h4>Support Play Marin Today!</h4>
                      Your support helps Play Marin close the activity gap in
                      Marin City and provides a more diverse peer group for over
                      300 kids annually throughout Southern MarinYour support
                      helps Play Marin close the activity gap in Marin City and
                      provides a more diverse peer group for over 300 kids
                      annually throughout Southern Marin
                    </Tab.Content>
                  </Col>
                  <Col sm={4}>
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        marginTop: "0px",
                        justifyContent: "space-around",
                        padding: "1px",
                      }}
                    >
                      <Button
                        style={{
                          width: "15rem",
                          height: "2.5rem",
                        }}
                      >
                        <Nav.Link eventKey="first">50</Nav.Link>
                      </Button>
                      <Button
                        style={{
                          width: "15rem",
                          height: "2.5rem",
                          marginTop: "10px",
                        }}
                      >
                        <Nav.Link eventKey="first">100</Nav.Link>
                      </Button>
                      <Button
                        style={{
                          width: "15rem",
                          height: "2.5rem",
                          marginTop: "10px",
                        }}
                      >
                        <Nav.Link eventKey="first">500</Nav.Link>
                      </Button>
                    </Nav>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Hero
