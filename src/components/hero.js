import React from "react"
import classes from "./hero.module.css"
import PlayMarin from "../images/playMarin.mp4"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import styles from "./form.module.css"
import { Player } from 'video-react';


const Hero = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} fluid={false} playsInline
>
        <source src={PlayMarin} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <div>
            <div>
              <center>
                <p className={classes.Herotext}
                >
                  With the goal of closing the activity gap in Marin City while
                  promoting diversity and inclusion throughout Marin County,
                  Play Marin started 8 years ago with one Marin City basketball
                  team of 9 players.
                                  <br/>
                                  <br/>
                  Today, Play Marin reaches more than 300 kids annually
                  throughout Marin with our mission of diversity and inclusion
                  through Play.
                </p>

              </center>
            </div>
            <Row  className={classes.Overlay}
            >
              <Col  xs={6} sm={6} md={6} lg={6}>
                <div>
                  <p className={classes.Overlaytext}
                  >
                    Your support helps Play Marin close the actiivty gap in
                    Marin City and provides a more diverse peer group for over
                    300 kids annually throughout Sourthern Marin
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",


                }}>
                <h5>Select An Amount:</h5>
                      <button
                        type="submit"
                        value="Support Play Marin"
                        style={{
                          marginTop: ".10rem",
                          width: "5.0rem",
                          display: "relative",
                          backgroundColor: "#007E26",
                          color: "white",
                          fontSize: "16px",
                          paddingTop: "0.45rem",
                          paddingBottom: "0.45rem",
                          fontWeight: "600",
                          fontFamily: `avenir`,
                          borderColor: "#007E26",
                        }}
                      >
                        $ 50.00
                      </button>
                      <button
                        type="submit"
                        value="Support Play Marin"
                        style={{
                          marginTop: "0.50rem",
                          width: "5.0rem",
                          display: "relative",
                          backgroundColor: "#007E26",
                          color: "white",
                          fontSize: "16px",
                          paddingTop: "0.45rem",
                          paddingBottom: "0.45rem",
                          fontWeight: "600",
                          fontFamily: `avenir`,
                          borderColor: "#007E26",
                        }}
                      >
                        $ 100
                      </button>
                      <button
                        type="submit"
                        value="Support Play Marin"
                        style={{
                          marginTop: "0.50rem",
                          width: "5.0rem",
                          display: "relative",
                          backgroundColor: "#007E26",
                          color: "white",
                          fontSize: "16px",
                          paddingTop: "0.45rem",
                          paddingBottom: "0.45rem",
                          fontWeight: "600",
                          fontFamily: `avenir`,
                          borderColor: "#007E26",
                        }}
                      >
                        $ 500
                      </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
