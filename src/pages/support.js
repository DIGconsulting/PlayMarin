import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ResponsiveEmbed from "react-responsive-embed"
import SolutionImg from "../images/playdates_2.jpg"
import SolutionImgTwo from "../images/desktop.jpg"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import "bootstrap/dist/css/bootstrap.min.css"

const Support = () => {
  return (
    <>
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
          <p>Support</p>
          <h1>PLAY MARIN</h1>
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
            <p style={{
              paddingTop: "10px",
              width: "85%",
            }} >please contact us for wire transfer information and other electronic payment options.  </p>

          </Col>
        </Row>
      </Container>
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
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <p>
              In just 8 years, Play Marin has grown from one basketball team of
              9 players to reaching over 300 kids annually through a variety of
              team sports and other educational and enriching activities, all
              while promoting diversity and solidarity among the young people of
              Marin County.
            </p>
            <p>
              All donations are tax-deductible to the extent allowed by law. Our
              US Tax identification number is 83-1737141
            </p>
            <p>
              Please consider supporting Play Marin’s work by making an online
              donation today. Our secure donation payment portal is coming soon!
              In the meantime, you may use these secure payment options:
            </p>
            <p>
              For other donation inquiries please send us a note to{" "}
              <a>donate@playmarin.org</a> or call (415) 686-5045.
            </p>
            <p>
              If you would like to send a gift via check, please mail to our
              address: Play Marin, PO Box 530, Sausalito, California 94965
            </p>
            <p>Thank you for supporting the Play Marin Movement! </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              backgroundImage: `url(${SolutionImg})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              color: "white",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          ></Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Support
