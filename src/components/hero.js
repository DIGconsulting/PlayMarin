import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Play from "../images/playMarinLogo-v2.png"
import Image from "gatsby-image"
import { Container, Row, Col, Button } from "react-grid-system"
import BackgroundVideo from "./BackgroundVideo"


const ImageBackground = styled(BackgroundVideo)`
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
  padding 0 calc((100vw - 550px) / 2) 17rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 3rem;
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

  @media only screen and (max-width: 600px) {

    padding 0 calc((100vw - 550px) / 2) 13rem;
    padding-left: 40px;

    h1 {
      font-size: 2.45rem;
    }

}
`

const Hero = () => {
  const { image, play } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "desktop.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      play: file(relativePath: { eq: "playMarinLogo-v2.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 100) {
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
          <ImageBackground tag="section" fluid={image.sharp.fluid}>
            <TextBox>
              <div>
                <h1>
                </h1>
                <a
                style={{
                  fontSize: `20px`
                }}
                >
                  <Link to="/"></Link>
                </a>
              </div>
            </TextBox>
          </ImageBackground>
        </Col>
      </Row>
    </>
  )
}

export default Hero
