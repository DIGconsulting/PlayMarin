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

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <Homepagethreeup />
      <Timeline />
      <Video />
      <Form />
      <Insta />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
