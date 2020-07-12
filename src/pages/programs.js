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
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

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
            src
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <Header />
       
      <Jumbotron  className="text-center" fluid style={{ backgroundColor: "white",
          marginTop: `100px`,
          marginBottom: `100px`,
        }}>
        <Container>
            <h1 >Programs</h1>
            <p>
              We provide year-long programming to ensure kids are engaged
              throughout the school year and summer
            </p>
            <div
              style={{
                margin: "auto",
                backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
                width: "550px",
                height: "10px",
              }}
            ></div>

        </Container>
      </Jumbotron>
      <Container
        style={{
          marginTop: `50px`,
        }}
      >
        <CardDeck>
  <Card>
    <img variant="top" src={basketball.sharp.fluid} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

      </Container>
      <Container
        style={{
          marginTop: `50px`,
          marginBottom: `100px`,
        }}
      >
        <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

      </Container>


      <Footer />
    </>
  )
}

export default Programs
