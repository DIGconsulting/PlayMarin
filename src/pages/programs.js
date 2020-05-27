import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col } from "react-grid-system"
import Image from "gatsby-image"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import { graphql, useStaticQuery } from "gatsby"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Programs() {
  const {
    basketball,
    volleygirl,
    lacrosse,
    playdates,
    track,
    bikes,
    skate,
    trips,
    clinics,
    summercamp,
  } = useStaticQuery(graphql`
    query {
      basketball: file(relativePath: { eq: "basketball.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      volleygirl: file(relativePath: { eq: "volley_girls.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lacrosse: file(relativePath: { eq: "lacrosse.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      playdates: file(relativePath: { eq: "playdates_2.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      track: file(relativePath: { eq: " track.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bikes: file(relativePath: { eq: "bikes.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      skate: file(relativePath: { eq: "skate.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trips: file(relativePath: { eq: "trips.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      clinics: file(relativePath: { eq: "clinics.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      summercamp: file(relativePath: { eq: "swimming.jpg" }) {
        sharp: childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <Media query="(min-width: 717px)" render={() => <Header />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(max-width: 720px)" render={() => <Mobilenav />} />
      <Jumbotron fluid>
        <Container>
          <center>
            <h1>Programs</h1>
            <p></p>
            <p>
              We provide year-long programming to ensure kids are engaged
              throughout the school year and summer
            </p>
            <p>
              <Button variant="primary">Register</Button>
            </p>
          </center>
        </Container>
      </Jumbotron>
      <Container
        style={{
          marginTop: `100px`,
        }}
      >
        <Row>
          <Col md={4}>
            <Image
              fluid={basketball.sharp.fluid}
              title="Basketball"
              description="cancelled until further notice"
            />
            <h4>Basketball</h4>
            <p>cancelled until further notice</p>
          </Col>
          <Col md={4}>
            <Image
              fluid={track.sharp.fluid}
              title="Track & Field"
              description="cancelled until further notice"
            />
            <h4>Track</h4>
            <p>cancelled until further notice</p>
          </Col>
          <Col md={4}>
            <Image
              fluid={volleygirl.sharp.fluid}
              title="Girl’s Volleyball"
              description="cancelled until further notice"
            />
            <h4>Girl volleyball</h4>
            <p>cancelled until further notice</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image
              fluid={lacrosse.sharp.fluid}
              title="Lacrosse"
              description="cancelled until further notice"
            />
            <h4>Lacrosse</h4>
            <p>cancelled until further notice</p>
          </Col>
          <Col md={4}>
            <Image
              fluid={bikes.sharp.fluid}
              title="Mountain Bike Club"
              description="cancelled until further notice"
            />
            <h4>Bike</h4>
          </Col>
          <Col md={4}>
            <Image
              fluid={skate.sharp.fluid}
              title="Skate Park"
              description="cancelled until further notice"
            />
            <h4>Skate Park</h4>
            <p>closed until further notice</p>
          </Col>
        </Row>{" "}
        <Row>
          <Col md={4}>
            <Image
              fluid={playdates.sharp.fluid}
              title="Play dates"
              description="cancelled until further notice"
            />
            <h4>Playdates</h4>
            <p>cancelled until further notice</p>
          </Col>
          <Col md={4}>
            <Image
              fluid={trips.sharp.fluid}
              title="Field trips"
              description="cancelled until further notice"
            />
            <h4>Trips</h4>
            <p>cancelled until further notice</p>
          </Col>
          <Col md={4}>
            <Image
              fluid={summercamp.sharp.fluid}
              title="Summer camp"
              description="cancelled until further notice"
            />
            <h4>Summer Camp</h4>
            <p>cancelled until further notice</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image
              fluid={clinics.sharp.fluid}
              title="Sports Clinics"
              description="cancelled until further notice"
            />
            <h4>Clinics</h4>
            <p>cancelled until further notice</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Programs
