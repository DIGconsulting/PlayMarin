import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
// import { Container, Row, Col, Button } from "react-grid-system"

const Homepagethreeup = () => {
  return (
    <>
      <Layout>
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
          Our Vision
        </div>
        <div
          style={{
            fontSize: `22px`,
            fontFamily: `avenir`,
            paddingTop: `20px`,
            textAlign: `center`,
            lineHeight: 1.4,
          }}
        >
          <p>
            We are PLAY Marin and we envision Marin as an integrated and unified
            community where both individuals and families live, work and most
            importantly, play together. We believe that play is an integral
            component of forming lasting friendships, developing critical skills
            and teaching valuable life lessons. This play can take shape in
            various forms from participation in organized sports to a simple
            play date.
          </p>
          <p>
            "It's important that children spread amongst the many small towns in
            Marin have the opportunity to learn about others, not by competing
            with them, but instead through the lens of playing with them". -
            Paul Austin
          </p>
        </div>

        <p
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
          Play and diversity are essential for a 21st century education
        </p>
        <p
          style={{
            fontSize: `22px`,
            fontFamily: `avenir`,
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          Why it matters
        </p>

        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            maxWidth: 1000,
            textAlign: `center`,
          }}
        >
          <div>
            <center>
              <FontAwesomeIcon
                icon={faUsers}
                style={{
                  fontSize: `75px`,
                  marginTop: `20px`,
                  paddingBottom: `20px`,
                  color: `#8c8c8c`,
                }}
              />
            </center>
            <p style={{ fontSize: `16px`, fontFamily: `avenir` }}>
              Extracurricular activities develop essential skills, such as
              teamwork, responsibility, grit, endurance, and a sense of culture
              and community (NCES)
            </p>
          </div>
          <div>
            <center>
              <FontAwesomeIcon
                icon={faRunning}
                style={{
                  fontSize: `75px`,
                  marginTop: `20px`,
                  paddingBottom: `20px`,
                  color: `#8c8c8c`,
                }}
              />
            </center>
            <p style={{ fontSize: `16px`, fontFamily: `avenir` }}>
              Play, such as sports, has a positive correlation on student
              attendance, GPA, and test scores (NCES)
            </p>
          </div>
          <div>
            <center>
              <FontAwesomeIcon
                icon={faBusinessTime}
                style={{
                  fontSize: `75px`,
                  marginTop: `20px`,
                  paddingBottom: `20px`,
                  color: `#8c8c8c`,
                }}
              />
            </center>
            <p style={{ fontSize: `16px`, fontFamily: `avenir` }}>
              Society is becoming increasingly diverse. Employers hire those who
              can work with colleagues and customers from diverse cultural
              backgrounds
            </p>
          </div>
        </div>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-around`,
            maxWidth: 1000,
            boxShadow: `0`,
            margin: `0.5rem`,
            maxWidth: `calc(75% - 1rem)`,
            transition: `200ms box-shadow linear`,
          }}
        ></div>
      </Layout>
    </>
  )
}

export default Homepagethreeup
