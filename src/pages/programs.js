import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col } from "react-grid-system"
import Basketball from "../images/basketball.jpg"
import Volleyball from "../images/volley_girls.jpg"
import Lacrosse from "../images/lacrosse.jpg"
import Playdates from "../images/playdates_2.jpg"
import Summercamp from "../images/banner.jpg"
import Track from "../images/ track.jpg"
import Bikes from "../images/bikes.jpg"
import Skate from "../images/skate.jpg"
import Trips from "../images/trips.jpg"
import Clinics from "../images/clinics.jpg"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.featureImage}
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  )
}

function Programs() {
  return (
    <>
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />

      <Container>
        <h1>Programs</h1>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={Basketball}
              title="Basketball"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Track}
              title="	Track & Field"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Volleyball}
              title="Girl’s Volleyball"
              description="cancelled until further notice"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={Lacrosse}
              title="Lacrosse"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Bikes}
              title="Mountain Bike Club"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Skate}
              title="Skate Park"
              description="cancelled until further notice"
            />
          </Col>
        </Row>{" "}
        <Row>
          <Col lg={4}>
            <Card
              featureImage={Playdates}
              title="Play dates"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Trips}
              title="Field trips"
              description="cancelled until further notice"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={Summercamp}
              title="Summer camp"
              description="cancelled until further notice"

            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={Clinics}
              title="Sports Clinics"
              description="cancelled until further notice"
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Programs
