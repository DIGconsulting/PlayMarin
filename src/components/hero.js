import React from "react"
import classes from "./hero.module.css"
import {  Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { ExternalLink } from "react-external-link"
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Hero() {
  const {
    video
  } =
  useStaticQuery(graphql`
    query { 
       video: file(relativePath: {eq: "playMarin.mp4"}) {
        videoH264 {
          path
        }
      }
    }
    `)

  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} fluid={false} playsInline
>
        <source src={video.videoH264.path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>

      <Card className="text-center" style={{
        color: "black",
        width: "1000px",
        display: "flex",
        marginBottom: "-17em",
        height: "300px",
        paddingBottom: "0px",
        paddingTop: "3rem"
      }}>
  <Card.Body bg="success" style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "left",
    paddingRight: "4rem"
  }}>
  
    <Card.Text text="dark">
    <Card.Title text="dark">Support Play Marin Today!</Card.Title>
    Your support helps Play Marin close the actiivty gap in Marin City and provides a more diverse peer group for over 300 kids annually throughout Sourthern Marin
    </Card.Text>
    <div style={{
       paddingLeft: "7rem",
    }}></div>
    <Button variant="success">50.00</Button>
    <Button variant="success">100.00</Button>
     <Button variant="success">100.00</Button>
  </Card.Body>

</Card>
      </div>
    </div>
  )
}

export default Hero
