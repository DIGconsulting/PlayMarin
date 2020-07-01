import React from "react"
import classes from "./hero.module.css"
import PlayMarin from "../images/playMarin.mp4"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import styles from "./form.module.css"

const Hero = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={PlayMarin} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <div>
            <div
              style={{
                fontWeight: "600",
                paddingBottom: "50px",
                paddingTop: "100px",
              }}
            >
              <center>
                <p
                  style={{
                    width: "50%",
                    fontFamily: "avenir",
                    textAlign: "left",
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
                    width: "50%",
                    fontFamily: "avenir",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Today, Play Marin reaches more than 300 kids annually
                  throughout Marin with our mission of diversity and inclusion
                  through Play.
                </p>
              </center>
            </div>
            <Row  className={classes.Overlay}
            >
              <Col sm={12} md={6} lg={6}>
                <div>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingRight: "50px",
                      fontFamily: "avenir",
                    }}
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
                          width: "9.0rem",
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
                          width: "9.0rem",
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
