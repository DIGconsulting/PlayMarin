import React from "react"
import classes from "./hero.module.css"
import PlayMarin from "../images/playMarin.mp4"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import styles from "./form.module.css"
import { Player } from 'video-react';
const Hero = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={PlayMarin} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
        <Row>
        <Col md={12}>
          <div>
            <div className={classes.Hero}>
              <center>
                <p
                  style={{
                    fontFamily: "avenir",
                    FontSize: "20px",
                  }}
                >
                  With the goal of closing the activity gap in Marin City while
                  promoting diversity and inclusion throughout Marin County,
                  Play Marin started 8 years ago with one Marin City basketball
                  team of 9 players.
                </p>
                <p
                  style={{
                    fontFamily: "avenir",
                  }}
                >
                  {" "}
                  Today, Play Marin reaches more than 300 kids annually
                  throughout Marin with our mission of diversity and inclusion
                  through Play.
                </p>
              </center>
            </div>
            </div>
            </Col>
            </Row>

                        <Row className={classes.Donate}
                        >
                            <Col className={classes.DonateCopy}  sm={12} md={9} style={{
                              }}>
                              <div
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  fontFamily: "avenir",


                                }}
                              >
                              <center>
                              <p>
                                Your support helps Play Marin close the actiivty gap in
                                Marin City and provides a more diverse peer group for over
                                300 kids annually throughout Sourthern Marin
                                </p>
                                </center>
                              </div>
                            </Col>
                            <Col className={classes.DonateButton}  sm={12} md={3} style={{

                            }}>
                            <h5>Select An Amount:</h5>
                                  <button
                                    type="submit"
                                    value="Support Play Marin"
                                    style={{
                                      marginTop: ".10rem",
                                      width: "9.0rem",
                                      display: "relative",
                                      backgroundColor: "#007E26",
                                      color: "white",
                                      fontSize: "16px",
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
                                      width: "9.0rem",
                                      display: "relative",
                                      backgroundColor: "#007E26",
                                      color: "white",
                                      fontSize: "16px",
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
                                      width: "9.0rem",
                                      display: "relative",
                                      backgroundColor: "#007E26",
                                      color: "white",
                                      fontSize: "16px",
                                      fontWeight: "600",
                                      fontFamily: `avenir`,
                                      borderColor: "#007E26",
                                    }}
                                  >
                                    $ 500
                                  </button>
                            </Col>
                        </Row>
        </div>
      </div>
    </div>
  )
}

export default Hero
