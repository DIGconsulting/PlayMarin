import React from "react"
import Iframe from "react-iframe"

const Video = () => {
  return (
    <>
      <center
        style={{
          marginTop: `80px`,
          marginBottom: `80px`,
        }}
      >
        <div>
          <iframe
            width="960"
            height="500"
            src="https://www.youtube.com/embed/p0LfbN2J4c8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div>
          <h2></h2>
        </div>
      </center>
    </>
  )
}

export default Video
