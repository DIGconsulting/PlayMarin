import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import Play from "../images/playMarinLogo-v2.png"

const ImageBackground = styled("div")`
  background: url("https://i.postimg.cc/FzSHSbhQ/img-soccer.jpg") no-repeat;
  background-position: top 50% center;
  background: #efefefe;
  background-size: cover;
  height: 65vh;
  + * {
    margin-top: 0;
  }
`
const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding 0 calc((100vw - 950px) / 2) 10rem;
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
  return (
    <ImageBackground>
      <TextBox>
        <div style={{}}>
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
              <img
                style={{
                  marginBottom: `-5px`,
                }}
                src={Play}
                width={150}
                height={46}
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
  )
}

export default Hero
