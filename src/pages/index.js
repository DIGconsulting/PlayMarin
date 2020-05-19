import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Homepagethreeup from "../components/homepagethreeup"
import Timeline from "../components/timeline"
import Insta from "../components/insta"
import Video from "../components/video"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import Newsletter from "../components/newsletter"

const IndexPage = () => {
  return (
    <>
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Hero /> <Media query="(min-width: 599px)" render={() => <Header />} />
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
