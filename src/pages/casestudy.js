import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col } from "react-grid-system"
import PieChart from "../components/piechart1.js"
import PieChartTwo from "../components/piechart2.js"
import SideChart from "../components/sidebarchart.js"
import Upchart from "../components/upchart"
import Upcharttwo from "../components/upcharttwo"
import Closerlook from "../components/closerlook"
import Mobilenav from "../components/mobilenav"
import Media from "react-media"

const CaseStudy = () => {
  return (
    <>
    <Media query="(min-width: 600px)" render={() => <Header />} />
    <Media query="(max-width: 599px)" render={() => <Mobilenav />} />

      <Container
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          margin: `100px auto`,
          maxWidth: 960,
          padding: `0 1rem`,
        }}
      >
        <h1>The Play Marin Play Study</h1>
        <h3>The Problem</h3>
        <p>
          Not only do Marin City youth lack access to recreational
          opportunities, but kids-at-large in Southern Marin lack exposure to
          diverse peers. This problem can’t be ignored, as racial tension in
          Southern Marin is prevalent.
        </p>
        <ul
          style={{
            listStyleType: `none`,
          }}
        >
          <li>
            Kids come together when they attend Tamalpais High School, the one
            high school in Southern Marin
          </li>
          <li>
            In 2017, racist slurs were spray painted at Tam High targeting
            Principal J.C. Farr, the schools first African American principal
          </li>
          <li>
            Continued attempts to promote student unity and mend issues of
            racism, such as Tam High’s “Breakthrough Day” have been claimed as
            ineffective by minority students
          </li>
        </ul>
        <Row>
          <Col lg={12}>
            <h2
              style={{
                display: `flex`,
                justifyContent: `center`,
                paddingTop: `80px`,
              }}
            >
              Marin County: Race and Equity?
            </h2>
            <p>
              We operate in one of the wealthiest counties in the country, which
              is also the most racially disparate county in CA.
            </p>
            <Row>
              <Col lg={3}>
                <PieChart />
              </Col>
              <Col lg={3}>
                MEDIAN HOUSEHOLD INCOME BY RACE
                <SideChart />
                <ol
                style={{
                  display: `flex`,
                  flexDirection: 'column',
                  textDecoration: `none`,
                  marginTop: `-20px`
                }}
                >
                <li>White: 120k</li>
                <li>Asia: 90k</li>
                <li>Black: 52k</li>
                <li>Latino: 50k</li>
                </ol>
              </Col>
              <Col lg={3}>
                3RD GRADE READING PROFICIENCY
                <Upchart />
                <div    style={{
                      display: `flex`,
                      flexDirection: 'column',
                      textDecoration: `none`,
                      marginTop: `-20px`,
                    }}
                >
                <div>White: 73%</div>
                <div>Black/Latino: 30%</div>
                </div>
              </Col>
              <Col lg={3}>
                HIGH SCHOOL GRADUATION RATE
                <Upcharttwo />
                <div    style={{
                      display: `flex`,
                      flexDirection: 'column',
                      textDecoration: `none`,
                      marginTop: `-20px`,
                    }}
                >
                <div>White: 95%</div>
                <div>Black/Latino: 83%</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Closerlook />
            </Row>
            <Row
              style={{
                paddingTop: `100px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
              }}
            >
              <PieChartTwo />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default CaseStudy
