import React from "React"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Homepagethreeup from "../components/Homepagethreeup"
import Timeline from "../components/timeline"
import Newsletterform from "../components/Newsletterform"
import Insta from "../components/Insta"
import Video from "../components/Video"

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
