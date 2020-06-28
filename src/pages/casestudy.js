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
      {/* <Jumbotron fluid>
        <Container>
          <center>
            <h1>The Play Marin Play Study</h1>
            <p></p>
            <p>
              We provide year-long programming to ensure kids are engaged
              throughout the school year and summer
            </p>
            <p>
            <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>

              <Button variant="primary">Download PDF</Button>
              </a>
            </p>
          </center>
        </Container>
      </Jumbotron> */}
      <Container fluid>
        {/* <center> */}
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
                // margin: "auto",
                paddingTop: "10rem ",
                paddingRight: "7rem",
                paddingLeft: "7rem",
                backgroundImage:
                  "linear-gradient(rgba(85,142,222,0.7), rgb(101, 20, 175, 0.7))",
              }}
            >
              <div style={{ marginBottom: "10rem" }}>
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
                  padding: "3rem",
                  display: "flex",
                }}
              >
                <p style={{ width: "50%" }}>
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
                              marginTop: ".45rem",
                            }}
                          >
                            $50
                          </div>
                        </center>
                        <div
                          style={{
                            // display: "flex",
                            // flexDirection: "row",
                            width: "5rem",
                          }}
                        >
                          <input
                            type="radio"
                            id="Annually"
                            name="donation"
                            value="anually"
                            backgroundColor="#838E9E"
                          ></input>
                          <label
                            for="anually"
                            style={{ fontSize: "10px", marginBottom: "0px" }}
                          >
                            Anually
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="just-once"
                            name="donation"
                            value="just-once"
                          ></input>
                          <label
                            for="just-once"
                            style={{ fontSize: "10px", marginBottom: "0px" }}
                          >
                            Just Once
                          </label>
                          <br />
                        </div>
                      </div>
                      <input
                        type="submit"
                        name="Support Play Marin"
                        style={{ width: "10rem", display: "relative" }}
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
            >
              <div
                style={{
                  // margin: "auto",
                  padding: "302px",
                  paddingTop: "150px",
                  paddingBottom: "150px",
                  paddingRight: "150px",
                  paddingLeft: "150px",
                  backgroundImage:
                    "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
                }}
              ></div>
            </div>

            {/* <div
                  style={{
                    // margin: "auto",
                    padding: "296px",
                    backgroundImage:
                      "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
                  }}
                ></div> */}
            {/* </div> */}
            <div
              style={{
                backgroundColor: "#992168",
                color: "white",
                width: "50%",
                padding: "7rem",
              }}
            >
              <h1>Our Solution</h1>
              <p>
                By providing opportunities for children of diverse ethnic and
                socioeconomic backgrounds in Southern Marin to learn, play and
                grow together we attack the problem in 3 key ways:
              </p>
              <ol>
                <p>
                  Delivering seasonal sports and activities in Marin City for
                  3rd-8th graders.
                </p>
                <p>
                  Implementing monthly Play Days focused around team-building
                  for children and families.
                </p>
                <p>
                  Recruiting youth of color to participate in sports and
                  activities in Southern Marin County.
                </p>
              </ol>
            </div>
          </div>
        </Col>
      </Container>
      <Container>
        <Timeline />
      </Container>

      <Footer />
    </>
  )
}

export default CaseStudy
