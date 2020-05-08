import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout.js"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Container, Row, Col, Button } from "react-grid-system"
import PieChart from "../components/piechart1.js"
import PieChartTwo from "../components/piechart2.js"

const CaseStudy = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          paddingTop: `100px`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <h1>The Play Marin Case study</h1>
        <p>Learn how participations successfully benefit from Play Marin</p>
        <Row>
          <Col lg={12}>
            <h2>Marin County: Race and Equity?</h2>
            <p>
              We operate in one of the wealthiest counties in the country, which
              is also the most racially disparate county in CA.
            </p>
            <Row>
              <PieChart />
              <Col lg={4}>here</Col>
              <Col lg={4}>here</Col>
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
