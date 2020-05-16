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
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />

      <Layout>
        <Form />
      </Layout>
      <Footer />
    </>
  )
}

export default Contact
