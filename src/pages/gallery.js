import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"

const Gallery = () => {
  return (
    <>
    <Header/>
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
