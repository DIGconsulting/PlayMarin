import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container } from "react-grid-system"
import { Jumbotron } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import {  Row, Col } from "react-bootstrap"
import SolutionImgTwo from "../images/desktop.jpg"

const Programs = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Header />

      <Jumbotron
        className="text-center"
        fluid
        style={{
          backgroundColor: "white",
          marginTop: `50px`,
          marginBottom: `50x`,
        }}
      >
        <Container>
          <p>Programs</p>
          <h1>PLAY Marin</h1>
          <div
            style={{
              margin: "auto",
              backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
              height: "10px",
            }}
          ></div>
        </Container>
      </Jumbotron>

      <Container
        fluid
        style={{
          paddingTop: "0px",
        }}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              backgroundImage: `url(${SolutionImgTwo})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              color: "white",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          ></Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <p>
              We need you. You can help solve the play and diversity challenge
              in Marin County. Give a gift that promotes a more inclusive and
              equitable Marin community by making a donation that provides
              athletic and extracurricular activities for Marin City Youth while
              creating a more diverse peer group for participating young people
              across Marin County.
            </p>
            <button
              style={{
                width: "15rem",
                height: "2.5rem",
                color: "#992168",
                borderColor: "#992168",
              }}
            >
              Venmo
            </button>
            <button
              style={{
                width: "15rem",
                height: "2.5rem",
                color: "#992168",
                borderColor: "#992168",
              }}
            >
              PayPal
            </button>
          </Col>
        </Row>
      </Container>




      <Container
        style={{
          marginTop: `50px`,
        }}
      >
        <Container>
          <h2 className="text-center">SEASONAL</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </p>
        </Container>

        <CardDeck>
          <Card>
            <img variant="top" />
            <Card.Body>
              <Card.Title>Basketball</Card.Title>
              <Card.Text>
                15 teams, 1st through 8th grade boys and girls, 10 players per
                team
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Girl’s Volleyball</Card.Title>
              <Card.Text>
                45 girls playing in 3 teams, after starting with 12 girls in
                2018
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Lacrosse</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Track & Field</Card.Title>
              <Card.Text>
                44 athletes in 2019, after starting with 12-15 kids in 2015
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
      <Container
        style={{
          marginTop: `100px`,
          marginBottom: `100px`,
        }}
      >
        <Container>
          <h2 className="text-center">CLUBS</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </p>
        </Container>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Summer Camps</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Swim Lessons</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Mountain Biking Club</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Skateboarding</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Field Trips </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>
                Sports Clinics, often with national athletes
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Social Justice </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sign-up now</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>

      <Footer />
    </>
  )
}

export default Programs
