import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Homepagethreeup from "../components/homepagethreeup"
import Timeline from "../components/timeline"
import Newsletterform from "../components/newsletterform"
import Insta from "../components/insta"
import Video from "../components/video"

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO title="Home" />

      <Banner />
      <Homepagethreeup />
      <Timeline />
      <Video />
      <Newsletterform />
      <Insta />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
