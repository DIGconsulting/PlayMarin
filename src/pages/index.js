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
import Header from "../components/header"
import Newsletter from "../components/newsletter"

const IndexPage = () => {
  return (
    <>
    <Hero />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Banner />
      <Layout>
        <SEO title="Home" />
        <Homepagethreeup />
        <Video />
        <Media query="(min-width: 717px)" render={() => <Timeline />} />
        <Newsletter />
        <Insta />
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
