import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Layout from "../components/layout"
import Form from "../components/form"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"

const Contact = () => {
  return (
    <>
    <Media query="(max-width: 600px)" render={() => <Mobilenav />} />
      <Media query="(min-width: 599px)" render={() => <Header />} />

      <Layout>
        <Form />
      </Layout>
      <Footer />
    </>
  )
}

export default Contact
