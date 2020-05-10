import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Button } from "react-grid-system"

const Homepagethreeup = () => {
  return (
    <>
      <center
        style={{
          paddingBottom: `50px`,
          paddingTop: `50px`,
        }}
      >
        <Container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1rem`,
          }}
        >
          <div
            style={{
              paddingTop: `20px`,
              fontSize: `30px`,
              lineHeight: `1.05`,
              fontWeight: 700,
              letterSpacing: `-.015em`,
              fontFamily: `avenir`,
            }}
          >
            The Problem
          </div>
          <div
            style={{
              fontSize: `22px`,
              fontFamily: `avenir`,
              paddingTop: `20px`,
            }}
          >
            <p>
              Not only do Marin City youth lack access to recreational
              opportunities, but kids-at-large in Southern Marin lack exposure
              to diverse peers. This problem can’t be ignored, as racial tension
              in Southern Marin is prevalent.
            </p>
          </div>
          <p
            style={{
              paddingTop: `20px`,
              fontSize: `30px`,
              lineHeight: `1.05`,
              fontWeight: 700,
              letterSpacing: `-.015em`,
              fontFamily: `avenir`,
            }}
          >
            Play and diversity are essential for a 21st century education
          </p>
          <p
            style={{
              fontSize: `22px`,
              fontFamily: `avenir`,
            }}
          >
            Why it matters
          </p>

          <div
            style={{
              display: `flex`,
              justifyContent: `space-around`,
              maxWidth: 1000,
              textAlign: `left`,
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
                teamwork, responsibility, grit, endurance, and a sense of
                culture and community (NCES)
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
                Society is becoming increasingly diverse. Employers hire those
                who can work with colleagues and customers from diverse cultural
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
        </Container>
      </center>
    </>
  )
}

export default Homepagethreeup
