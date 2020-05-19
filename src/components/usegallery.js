import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Usegallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    `}
    // render={data => data.allDirectory.edges.node.allImageSharp.map(allImageSharp => ({
    //     ...allImageSharp.nodes.fluid
    // }))}

    render={data => <div>{data.allImageSharp}</div>}
  ></StaticQuery>
)

export default Usegallery
