import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import Timeline from "../components/timeline"
import PieChart from "../components/piechart1.js"
import PieChartTwo from "../components/piechart2.js"
import SideChart from "../components/sidebarchart.js"
import Upchart from "../components/upchart"
import Upcharttwo from "../components/upcharttwo"
import Closerlook from "../components/closerlook"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import HomeImg from "../gallery-images/pYdpk5lbQYSWbUmuEMyfsw_thumb_36ad.jpg"
import PlayImg from "../images/hero_image.jpg"
import PaulProfileImg from "../images/paul.jpeg"
import "bootstrap/dist/css/bootstrap.min.css"
import uploadedFileLink from "../images/playstudy.pdf"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
const CaseStudy = () => {
  return (
    <>
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Container fluid>
        <Col>
          <div
            style={{
              backgroundImage: `url(${HomeImg})`,
              "-webkit-background-size": "cover",
              "-moz-background-size": "cover",
              "-o-background-size": "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
              color: "white",
            }}
          >
            <div
              style={{
                paddingTop: "10rem ",
                paddingRight: "7rem",
                paddingLeft: "7rem",
                backgroundImage:
                  "linear-gradient(rgba(85,142,222,0.7), rgb(101, 20, 175, 0.7))",
              }}
            >
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
        </Col>
      </Container>

      <Container fluid>
        <Col>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundImage: `url(${HomeImg})`,
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                backgroundSize: "cover",
                width: "50%",
                backgroundPosition: "center center",
                color: "white",
              }}
            ></div>
            <div
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
            </div>
          </div>
        </Col>
      </Container>
      <Container fluid>
        <div
          style={{
            color: "white",
            backgroundImage: "linear-gradient(#558EDE, #6514AF)",
          }}
        >
          <div>
            <p
              style={{
                paddingLeft: "30rem",
                paddingTop: "7rem",
              }}
            >
              "It's important that children spread amounst the <br />
              many small towns in Marin have the opportunity to <br />
              learn about others, not by competing with them, but <br />
              instead through the lens of playing with them."
            </p>
            <p
              style={{
                paddingLeft: "50rem",
                fontSize: "10px",
                marginBottom: "0",
              }}
            >
              Paul Austin
            </p>
            <p style={{ paddingLeft: "50rem", fontSize: "10px" }}>
              Founder, Play Marin
            </p>
          </div>
          <div>
            <img
              src={PaulProfileImg}
              alt="paul's profile pic"
              style={{ borderRadius: "50%", height: "7rem" }}
            />
          </div>
        </div>
      </Container>
      <Container
        fluid
        style={{
          backgroundImage: `url(${PlayImg})`,
          height: "50rem",
        }}
      >
        <div
          fluid
          style={{
            backgroundColor: "#007E26",
            color: "white",
          }}
        >
          <div>
            <h1>
              Play and diversigy are essential for a 21st century education
            </h1>
            <p>
              Play Marin envisions Marin as an integrated and unifed community.
              The lessions learned through the play and expereinces we provide
              instills valuable skills, create friendships, and enhances well
              being and solidarity amoung the young people of Marin, improving
              their prospects for a successful future and benefiting the health
              of our broader Marin community.{" "}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <p>
                Extracurricular actvities develop essential skills, such as
                teamwork, responsibility, grit, endurance, and a sense of
                culture and community (NCES)
              </p>
            </div>
            <div>
              <p>
                Play, such as sports, has a positive correlation on student
                attendance, GPA, and test scores (NCES)
              </p>
            </div>
            <div>
              <p>
                Society is becoming increaingly diverse. Employers hire those
                who can work with colleagues and customers from diverse cultural
                backgrounds
              </p>
            </div>
          </div>
        </div>
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

export default CaseStudy
