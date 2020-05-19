import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"
import Usegallery from "../components/usegallery"
import Image from "gatsby-image"

const Gallery = () => {
  return (
    <>
    <Media query="(min-width: 600px)" render={() => <Header />} />
    <Media query="(max-width: 599px)" render={() => <Mobilenav />} />

    <center>
      <h2 style={{
        marginTop: `100px`,
      }}
      >Play Marin Photo Gallery</h2>
      <Usegallery/>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          flexFlow: `row-wrap`,
          Maxwidth: 960,
          justifyContent: `space-between`,
        }}
      >
        </div>
    </center>
  </>
  )
}

export default Gallery
