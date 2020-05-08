import React from "React"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"

const Homepagethreeup = () => {
  return (
    <>
      <center
        style={{
          paddingBottom: `50px`,
        }}
      >
        <p
          style={{
            paddingTop: `20px`,
            fontSize: `30px`,
            lineHeight: `1.05`,
            fontWeight: 700,
            letterSpacing: `-.015em`,
            fontFamily: `SF Pro Display SF Pro Display SF Pro Icons Helvetica NeueHelvetica Arial sans-serif`,
          }}
        >
          Play and diversity are essential for a 21st century education
        </p>
        <p
          style={{
            fontSize: `22px`,
            fontFamily: `SF Pro Display SF Pro Display SF Pro Icons Helvetica NeueHelvetica Arial sans-serif`,
            fontWeight: `600`,
            color: `#8c8c8c`,
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
            <p style={{ fontSize: `16px` }}>
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
            <p style={{ fontSize: `16px` }}>
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
            <p style={{ fontSize: `16px` }}>
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
      </center>
    </>
  )
}

export default Homepagethreeup
