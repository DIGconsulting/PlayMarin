import React from "react"
import { RadialChart } from "react-vis"

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]

const PieChart = () => {
  return (
    <>
      <RadialChart data={myData} width={175} height={175} />
    </>
  )
}

export default PieChart
