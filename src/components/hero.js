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
                  <h5 style={{
                    color: "black"
                  }}>Select An Amount:</h5>
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
              </Tab.Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Hero
