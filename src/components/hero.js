import React from "react"
import classes from "./hero.module.css"
import { Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import "./hero.module.css"
import Video from "../images/playMarin.webm"

function Hero() {

  return (
    <>
      <div className={classes.Container}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={classes.Video}
          fluid={false}
        >
          <source src={Video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <Container>
            <Jumbotron
              style={{
                background: "rgba(7, 58, 99, 0.5)",
                padding: "1rem 1rem",
                marginBottom: "0px"
              }}
            >
              <Row className="justify-content-md-center">
                <div className="text-center">
                  <p style={{ fontSize: "22px" }}>
                    Play Marin provides sports and other extracurricular
                    activities to intentionally give kids of diverse ethnic and
                    socioeconomic backgrounds the opportunity to learn and grow
                    together through play.
                  </p>
                </div>
              </Row>
              <Row className="justify-content-md-center">
                <div className="text-center">
                  <p style={{ fontSize: "22px" }}>
                    With the goal of closing the activity gap in Marin City
                    while promoting diversity and inclusion throughout Marin
                    County, Play Marin started 8 years ago with one Marin City
                    basketball team of 9 players.
                  </p>
                </div>
              </Row>
              <Row className="justify-content-md-center">
                <div className="text-center">
                  <p style={{ fontSize: "22px" }}>
                    Today, Play Marin reaches more than 300 kids annually
                    throughout Marin with our mission of diversity and inclusion
                    through Play.
                  </p>
                </div>
              </Row>
            </Jumbotron>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Hero
