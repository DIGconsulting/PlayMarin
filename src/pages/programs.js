import React from "React"
import Layout from "../components/layout.js"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col, Button } from "react-grid-system"
import basketball from "../images/Basketball.jpg"
import volleyball from "../images/Volley_girls.jpg"
import lacrosse from "../images/Lacrosse.jpg"
import playdates from "../images/Playdates.jpg"
import summercamp from "../images/Banner.jpg"
import track from "../images/ Track.jpg"
import bikes from "../images/Bikes.jpg"
import skate from "../images/Skate.jpg"
import trips from "../images/Trips.jpg"
import clinics from "../images/Clinics.jpg"

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
      <Header />
      <Container>
        <h1>Programs</h1>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={basketball}
              title="Basketball"
              description="Let's write some interactive form with React"
              link="https://sebhastian.com/interactive-react-form"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={track}
              title="	Track & Field"
              description="Babel make JavaScript code browser-compatible."
              link="https://sebhastian.com/babel-guide"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={volleyball}
              title="Girl’s Volleyball"
              description="Learn the prerequisites of learning React fast"
              link="https://sebhastian.com/js-before-react"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={lacrosse}
              title="Lacrosse"
              description="Let's write some interactive form with React"
              link="https://sebhastian.com/interactive-react-form"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={bikes}
              title="Mountain Bike Club"
              description="Babel make JavaScript code browser-compatible."
              link="https://sebhastian.com/babel-guide"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={skate}
              title="Skate Park"
              description="Learn the prerequisites of learning React fast"
              link="https://sebhastian.com/js-before-react"
            />
          </Col>
        </Row>{" "}
        <Row>
          <Col lg={4}>
            <Card
              featureImage={playdates}
              title="Play dates"
              description="Let's write some interactive form with React"
              link="https://sebhastian.com/interactive-react-form"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={trips}
              title="Field trips"
              description="Babel make JavaScript code browser-compatible."
              link="https://sebhastian.com/babel-guide"
            />
          </Col>
          <Col lg={4}>
            <Card
              featureImage={summercamp}
              title="Summer camp"
              description="Learn the prerequisites of learning React fast"
              link="https://sebhastian.com/js-before-react"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Card
              featureImage={clinics}
              title="Sports Clinics"
              description="Learn the prerequisites of learning React fast"
              link="https://sebhastian.com/js-before-react"
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Programs
