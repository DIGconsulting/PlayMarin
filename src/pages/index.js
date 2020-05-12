import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Homepagethreeup from "../components/homepagethreeup"
import Timeline from "../components/timeline"
import Insta from "../components/insta"
import Video from "../components/video"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import Form from "../components/form.js"
import Header from "../components/header"

const IndexPage = () => (
  <>
  <Hero />
   <Header/>
  <Banner />
    <Layout>
      <SEO title="Home" />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <Homepagethreeup />
      <Video />
      <Timeline />
      <Form />
      <Insta />
    </Layout>
  <Footer />
  </>
)

export default IndexPage
