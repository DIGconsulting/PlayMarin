import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Play from "../images/playMarinLogo-v2.png"
import Image from "gatsby-image"
import { Container, Row, Col, Button } from "react-grid-system"


const ImageBackground = styled(BackgroundImage)`
  background-position: top 50% center;
  background: #efefefe;
  background-size: cover;
  height: 65vh;
  + * {
    margin-top: 0;
  }
`
const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem , #ddbbff00 );
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding 0 calc((100vw - 450px) / 2) 10rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color: #fff;
  }
  p,
  a {
    color: #ffff;
    margin-top: 0;
  }

  a {
      margin-top: 0.5rem;
  }

`

const Hero = () => {
  const { image, play } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "desktop.jpg" }) {
        sharp:childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    },
    play: file(relativePath: { eq: "playMarinLogo-v2.png" }) {
      sharp:childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
   }
  }
  `)
  return (
    <>
  <Row>
    <Col lg={12} md={12} sm={12} xs={12}>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextBox>
          <div>
            <h1
              style={{
                fontSize: `3rem`,
              }}
            >
              Diverse & Inclusion
              <span
                style={{
                  color: `#fff`,
                  fontSize: `3rem`,
                  padding: `0px 10px 10px 10px`,
                }}
              >
                <Image
                  fluid={play.sharp.fluid}
                />
              </span>
            </h1>

            <p
              style={{
                fontWeight: 500,
              }}
            ></p>
            <p>
              <a>
                <Link to="/">Become a Petition &rarr;</Link>
              </a>
            </p>
          </div>
        </TextBox>
      </ImageBackground>
      </Col>
      </Row>
    </>
  )
}

export default Hero
