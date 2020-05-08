import React from "React"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import useInstagram from "../components/Use-instagram"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  return (
    <>
      <center>
        <h2>Instagram posts from @{username}</h2>
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            width: 960,
            justifyContent: `space-between`,
          }}
        >
          {instaPhotos.map(photo => (
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}/`}
              style={{
                boxShadow: `0`,
                margin: `0.5rem`,
                maxWidth: `calc(33% - 1rem)`,
                width: `120px`,
                transition: `200ms box-shadow linear`,
              }}
            >
              <Image
                fluid={photo.fluid}
                alt={photo.caption}
                style={{
                  maxWidth: `100%`,
                  marginTop: `0`,
                }}
              />
            </a>
          ))}
        </div>
        <a href={`https://instagram.com/${username}`}>
          see more on Instagram &rarr;
        </a>
      </center>
    </>
  )
}

export default Insta
