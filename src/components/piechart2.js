import React from "react"
import { RadialChart } from "react-vis"
import { Container, Row, Col, Button } from "react-grid-system"
import Layout from "./layout"
const myData = [{ angle: 1 }, { angle: 10 }, { angle: 2 }]
const myDataTwo = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]
const myDataThree = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]

const PieChartTwo = () => {
  return (
    <>
      <Layout>
        <Row>
          <Col lg={12}>
            <h2>Programs, Partners and Data</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div>
              <RadialChart data={myData} width={175} height={175} />
              <p>Gender: 60% Boys 40% Girls</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <RadialChart data={myDataTwo} width={175} height={175} />
              <p>Ethnicity: 80% People of Color 20% White</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <RadialChart data={myDataThree} width={175} height={175} />
              <p>Residency: 75% Marin City resident 25% Non-resident</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default PieChartTwo
