import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col } from "react-grid-system"
import Image from "gatsby-image"
import HomeImg from "../gallery-images/pYdpk5lbQYSWbUmuEMyfsw_thumb_36ad.jpg"
import PlayImg from "../images/hero_image.jpg"
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
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <Container>
          <center>
            <p>PAGE TITLE</p>
            <h1>PLAY Marin</h1>
            <div
              style={{
                margin: "auto",
                backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
                width: "550px",
                height: "10px",
              }}
            ></div>
          </center>
        </Container>
      </Jumbotron>
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
              <h1>Section Headline</h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctus non, massa.
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
        <Col>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#007E26",
                color: "white",
                width: "50%",
                padding: "7rem",
              }}
            >
              <h1>Section Headline</h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctus non, massa.
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(${PlayImg})`,
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
          </div>
        </Col>
      </Container>
      <Container
        style={{
          marginTop: `100px`,
        }}
      >
        <Row>
          <Col>
            <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Section Title
            </h1>
            <p style={{ textAlign: "center", marginBottom: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Col md={4}>
            <h4>Basketball</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={basketball.sharp.fluid}
              title="Basketball"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Track</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={track.sharp.fluid}
              title="Track & Field"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Girl volleyball</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={volleygirl.sharp.fluid}
              title="Girl’s Volleyball"
              description="cancelled until further notice"
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Col md={4}>
            <h4>Lacrosse</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={lacrosse.sharp.fluid}
              title="Lacrosse"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Bike</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={bikes.sharp.fluid}
              title="Mountain Bike Club"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Skate Park</h4>
            <p>closed until further notice</p>
            <Image
              fluid={skate.sharp.fluid}
              title="Skate Park"
              description="cancelled until further notice"
            />
          </Col>
        </Row>{" "}
        <Row style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Col md={4}>
            <h4>Playdates</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={playdates.sharp.fluid}
              title="Play dates"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Trips</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={trips.sharp.fluid}
              title="Field trips"
              description="cancelled until further notice"
            />
          </Col>
          <Col md={4}>
            <h4>Summer Camp</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={summercamp.sharp.fluid}
              title="Summer camp"
              description="cancelled until further notice"
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Col md={4}>
            <h4>Clinics</h4>
            <p>cancelled until further notice</p>
            <Image
              fluid={clinics.sharp.fluid}
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
