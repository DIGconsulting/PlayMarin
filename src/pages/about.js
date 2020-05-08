import React from "React"
import Header from "../components/header"
import Footer from "../components/footer"
import { Container, Row, Col, Jumbotron } from "react-grid-system"

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            backgroundColor: `#000`,
          }}
          className="Jumbotron"
        ></div>
        <Row>
          <Col lg={12}>
            <center
              style={{
                marginTop: `60px`,
              }}
            >
              <div>
                <h1>Our Vision</h1>
                <p>
                  We are PLAY Marin and we envision Marin as an integrated and
                  unified community where both individuals and families live,
                  work and most importantly, play together. We believe that play
                  is an integral component of forming lasting friendships,
                  developing critical skills and teaching valuable life lessons.
                  This play can take shape in various forms from participation
                  in organized sports to a simple play date.
                </p>
                <p>
                  "It's important that children spread amongst the many small
                  towns in Marin have the opportunity to learn about others, not
                  by competing with them, but instead through the lens of
                  playing with them". - Paul Austin
                </p>
              </div>
              <div
                style={{
                  marginTop: `60px`,
                }}
              >
                <h1>Mission Statement</h1>
                <p>
                  PLAY Marin recognizes the need for stronger diversity and
                  inclusion in Marin County. We believe that the unique
                  experiences of different cultures and socioeconomic
                  backgrounds serves to enhance our larger community. We
                  intentionally give kids of diverse ethnic and socioeconomic
                  backgrounds the opportunity to learn, grow and play together.
                  Being able to understand and appreciate others who are
                  different from you is vital to the advancement of our society.
                  We see play as a vehicle to this end. We aim to counter the
                  negative narrative that exist about certain communities within
                  Marin (namely Marin City and the Canal). Highlighting the
                  talent, compassion and kindness that exist in those
                  communities, affords other Marin communities an opportunity to
                  experience how amazing these communities are. We will achieve
                  this by engaging families from the larger Marin area with
                  families from these communities. United through play, Marin
                  will move past tolerance and become a more inclusive place to
                  live.
                </p>
              </div>
            </center>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default About
