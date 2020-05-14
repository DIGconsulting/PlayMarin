import React from "react"
import { RadialChart } from "react-vis"
import Layout from "./layout"

const myData = [{ angle: 2, label: "Super Custom label" }, { angle: 5 }]

const PieChart = () => {
  return (
    <>
      <Layout>
        <div>POPULATION BY RACE</div>
        <RadialChart data={myData} width={175} height={175} />
      </Layout>
    </>
  )
}

export default PieChart
