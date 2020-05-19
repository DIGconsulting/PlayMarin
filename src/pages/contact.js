import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Layout from "../components/layout"
import Form from "../components/form"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import { Jumbotron, Button,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <>
      <Media query="(min-width: 600px)" render={() => <Header />} />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <Jumbotron fluid>
        <Container>
        <center>
          <h1>Contact Us</h1>
          <p>
          +1 (415) 686-5045
          </p>
          <p>
          We look forward to hearing from you.
          </p>
        </center>
        </Container>
      </Jumbotron>
      <Layout>
        <Form />
      </Layout>
      <Footer />
    </>
  )
}

export default Contact
