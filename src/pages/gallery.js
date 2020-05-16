import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"

const Gallery = () => {
  return (
    <>
      <Media query="(min-width: 599px)" render={() => <Header />} />
      <Media query="(max-width: 599px)" render={() => <Mobilenav />} />

      <Layout>
        <center
          style={{
            marginTop: `50px`,
          }}
        >
          <h1>This is the Gallery loaded from Google Drive</h1>
        </center>
      </Layout>
    </>
  )
}

export default Gallery
