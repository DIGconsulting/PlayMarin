import React from "React"
import { RadialChart } from "react-vis"

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]
const myDataTwo = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]
const myDataThree = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]

const PieChartTwo = () => {
  return (
    <>
      <RadialChart data={myData} width={175} height={175} />
      <RadialChart data={myDataTwo} width={175} height={175} />
      <RadialChart data={myDataThree} width={175} height={175} />
    </>
  )
}

export default PieChartTwo
