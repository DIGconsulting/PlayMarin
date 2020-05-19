import React from "react"
import ResponsiveEmbed from "react-responsive-embed"

const Video = () => {
  return (
    <>
      <center
        style={{
          marginTop: `80px`,
          marginBottom: `80px`,
        }}
      >
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/p0LfbN2J4c8"
          ratio="4:2"
        />

        <div
          style={{
            paddingTop: `80px`,
            fontSize: `30px`,
            lineHeight: `1.05`,
            fontWeight: 700,
            letterSpacing: `-.015em`,
            fontFamily: `avenir`,
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          Our Mission
        </div>
        <div
          style={{
            fontSize: `22px`,
            fontFamily: `avenir`,
            paddingTop: `20px`,
            lineHeight: 1.5,
            textAlign: `left`,
          }}
        >
          <p>
            PLAY Marin recognizes the need for stronger diversity and inclusion
            in Marin County. We believe that the unique experiences of different
            cultures and socioeconomic backgrounds serves to enhance our larger
            community. We intentionally give kids of diverse ethnic and
            socioeconomic backgrounds the opportunity to learn, grow and play
            together. Being able to understand and appreciate others who are
            different from you is vital to the advancement of our society. We
            see play as a vehicle to this end. We aim to counter the negative
            narrative that exist about certain communities within Marin (namely
            Marin City and the Canal). Highlighting the talent, compassion and
            kindness that exist in those communities, affords other Marin
            communities an opportunity to experience how amazing these
            communities are. We will achieve this by engaging families from the
            larger Marin area with families from these communities. United
            through play, Marin will move past tolerance and become a more
            inclusive place to live.
          </p>
        </div>
      </center>
    </>
  )
}

export default Video
