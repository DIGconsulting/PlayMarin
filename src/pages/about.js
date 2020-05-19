import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import { Container, Row, Col } from "react-grid-system"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const About = () => {
  const { paul, roxie, lawrance, board} = useStaticQuery(graphql`
    query {
      paul: file(relativePath: { eq: "paul.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      roxie: file(relativePath: { eq: "roxie.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lawrance: file(relativePath: { eq: "lawrance.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      board: file(relativePath: { eq: "board.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Media query="(min-width: 600px)" render={() => <Header />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <Jumbotron fluid>
        <Container>
          <center>
            <h1>Leadership Team</h1>
            <p></p>
            <p>
              Today, Play Marin touches approximately 300 kids annually in Marin
              City and greater Southern Marin.
            </p>
            <p></p>
          </center>
        </Container>
      </Jumbotron>
      <Container
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1rem`,
        }}
      >
        <Row
          style={{
            margin: `0 auto`,
            paddingTop: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image fluid={paul.sharp.fluid} alt="paul" />
              <p>Play Marin Founder & CEO Paul Austin</p>
            </div>
          </Col>
          <Col md={10} sm={12} xs={12}>
            <div>
              <p>
                Play Marin Founder & CEO Paul Austin is a longtime Marin City
                resident who has been a youth advocate for the majority of his
                professional life. After serving for several years as Director
                of Recreation for Marin City Community Center, Tamalpais High
                graduate Mr. Austin, who studied Early Childhood Education at
                Texas Southern University and holds a Bachelor’s in Psychology
                from Dominican University in San Rafael, saw a need to create
                opportunities for Marin City youth to engage in organized
                athletics and other extracurricular activities. He founded Play
                Marin to meet that need, and to intentionally give kids of
                diverse ethnic and socioeconomic backgrounds from the broader
                Marin community the opportunity to play, learn, and grow
                together. Starting in 2012 with just one basketball team of nine
                players, Mr. Austin’s dedicated stewardship of Play Marin
                brought steady and expansive growth.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `80px`,
            paddingBottom: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <Image fluid={lawrance.sharp.fluid} alt="Roxie" />
            <p>Lawrence P. Bancroft, Treasurer </p>
          </Col>
          <Col md={10} sm={12} xs={12}>
            <div>
              <p>
                President and CEO of Bivium Capital, Lawrence leads a seasoned
                and dedicated team of investment professionals with expertise
                across every asset class and type of investment. Prior to
                founding Bivium in 2002, Lawrence was an initial member of
                Goldman Sachs IMD’s external manager selection team, where he
                worked on developing all areas of its manager of managers
                business; and evaluated minority-owned investment companies as
                part of the firm’s Urban Investment Group for capital
                allocation. Previously the Board Chair for Big Brothers Big
                Sisters of the North Bay, Lawrence currently sits on the
                governance and finance committees for the Bay Area chapter of
                Big Brothers Big Sisters. He earned his B.S. from Cornell
                University’s School of Industrial and Labor Relations, and his
                M.P.A. from Cornell University’s School of Public Affairs.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image fluid={board.sharp.fluid} alt="board chair" />
              <p>Board Chair Bruce & Kirsten Edwards</p>
            </div>
          </Col>
          <Col md={10}>
            <div>
              <p>
              Board Chair Bruce Edwards lives in Mill Valley with his wife Kirsten, and sons Dillon, JP, and
              Reed. With over 20 years of financial services experience, Bruce is a Family CFO for
              approximately 25 families. In these endeavors Bruce assists his clients with tax-efficient
              charitable giving through a combination of donor-advised funds and foundations. A devoted
              family man, some of Bruce’s other passions include fly fishing throughout the world, surfing, and
              playing music with friends and family. His dedication to wilderness conservation and charitable
              youth development led Bruce to serve on the boards of the Henry’s Fork Foundation in Idaho,
              and Mt Carmel CYO basketball in Mill Valley.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image fluid={roxie.sharp.fluid} alt="Roxie" />
              <p>Roxie Baker, Secretary</p>
            </div>
          </Col>
          <Col md={10}>
            <div>
              <p>
                In addition to over two decades in the music industry as a
                recording artist management executive, Roxie has designed and
                directed several therapeutic and educational horseback riding
                programs, including as Director of Therapeutic Riding for an
                east coast boarding school for at-risk kids age 5-17,
                traditional riding programs for two conventional boarding
                schools, a flagship therapeutic riding program for special needs
                kids in Los Angeles, and a comprehensive equine husbandry and
                riding program at an educational ranch for K-8 students of all
                abilities in the East Bay Area. The parent of an NCAA athlete,
                Roxie first learned about Play Marin when her daughter was a
                volunteer swim instructor for their summer camp program. Roxie
                has a B.A. in Psychology from San Francisco State University and
                graduate studies in Health Education at JFK University.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default About
