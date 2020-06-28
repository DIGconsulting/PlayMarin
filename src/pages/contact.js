import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Layout from "../components/layout"
import Form from "../components/form"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import { Jumbotron, Button, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Contact = () => {
  return (
    <>
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Jumbotron fluid style={{ backgroundColor: "white" }}>
        <Container>
          <center>
            <h1>Contact Us</h1>
            <p>+1 (415) 686-5045</p>
            <p>We look forward to hearing from you.</p>
          </center>
        </Container>
      </Jumbotron>
      <Container
        fluid
        style={{
          paddingTop: "3rem",
          backgroundImage:
            "linear-gradient(rgba(85,142,222,0.7), rgb(101, 20, 175, 0.7))",
        }}
      >
        <Layout>
          <Form />
        </Layout>
        <Footer />
      </Container>
    </>
  )
}

export default Contact
