import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ResponsiveEmbed from "react-responsive-embed"

const Support = () => {
  return (
    <>
      <Header />
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <Container>
          <center>
            <p>Support</p>
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
            }}
          >
          </Col>

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
            <h1>Everyone wins with Play Marin</h1>
            <p>
Give a gift that promotes a more inclusive and equitable Marin community by making a donation that provides athletic and extracurricular activities for Marin City Youth while creating a more diverse peer group for participating young people across Marin County. 
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
      <Footer />
    </>
  )
}

export default Support
