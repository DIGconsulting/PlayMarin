import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Container, Row, Col, Jumbotron } from "react-grid-system"
import Roxie from "../images/roxie.jpg"
import Paul from "../images/Paul.jpeg"
import Lawrance from "../images/Lawrance.jpeg"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"

const About = () => {
  return (
    <>
      <Media query="(min-width: 900px)" render={() => <Header />} />
      <Media query="(max-width: 900px)" render={() => <Mobilenav />} />
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
              <img src={Paul} />
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
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <img src={Roxie} />
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
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `80px`,
            paddingBottom: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <img src={Lawrance} />
            <div>Lawrence P. Bancroft, Treasurer </div>
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
      </Container>
      <Footer />
    </>
  )
}

export default About
