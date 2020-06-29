import React from 'react';
import classes from './hero.module.css';
import PlayMarin from "../images/playMarin.mp4"


const Hero = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={PlayMarin} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                          <div>
                            <div style={{ marginBottom: "10rem", fontWeight: "600" }}>
                              <center>
                                <p>
                                  Play Marin started 8 years ago with one <br />
                                  Marin City Basketball team of 9 players.
                                </p>
                              </center>
                            </div>
                            <div
                              style={{
                                backgroundColor: "rgba(64, 75, 107, .9)",
                                padding: "2rem",
                                display: "flex",
                              }}
                            >
                              <p
                                style={{ width: "50%", fontSize: "12px", fontWeight: "600" }}
                              >
                                Your support helps Play Marin close the actiivty gap in <br />
                                Marin City and provides a more diverse peer group for
                                <br /> over 300 kids annually throughout Sourthern Marin
                              </p>
                              <div style={{ width: "50%", display: "flex", height: "2rem" }}>
                                <div>
                                  <form>
                                    <div style={{ display: "flex" }}>
                                      <center>
                                        <div
                                          style={{
                                            backgroundColor: "#838E9E",
                                            height: "1.5rem",
                                            width: "5rem",
                                            color: "white",
                                            fontWeight: "600",
                                            marginRight: ".25rem",
                                          }}
                                        >
                                          $50
                                        </div>
                                      </center>
                                      <div
                                        style={{
                                          width: "5rem",
                                          lineHeight: ".5rem",
                                        }}
                                      >
                                        <input
                                          type="radio"
                                          id="Annually"
                                          name="donation"
                                          value="anually"
                                          backgroundColor="#838E9E"
                                          style={{
                                            marginRight: ".25rem",
                                          }}
                                        ></input>
                                        <label
                                          for="anually"
                                          style={{
                                            fontSize: "10px",
                                            marginBottom: "0px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Anually
                                        </label>
                                        <br />
                                        <input
                                          type="radio"
                                          id="just-once"
                                          name="donation"
                                          value="just-once"
                                          style={{
                                            marginRight: ".25rem",
                                          }}
                                        ></input>
                                        <label
                                          for="just-once"
                                          style={{
                                            fontSize: "10px",
                                            marginBottom: "0px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Just Once
                                        </label>
                                        <br />
                                      </div>
                                    </div>
                                    <input
                                      type="submit"
                                      value="Support Play Marin"
                                      style={{
                                        marginTop: ".25rem",
                                        width: "9.5rem",
                                        display: "relative",
                                        backgroundColor: "#007E26",
                                        borderColor: "#fff",
                                        color: "white",
                                        fontSize: "10px",
                                        paddingTop: ".25rem",
                                        paddingBottom: ".25rem",
                                        fontWeight: "600",
                                      }}
                                    ></input>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                </div>
        </div>

    )
}

export default Hero
