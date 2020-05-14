import React from "react"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas,
} from "react-vis"

export default class SideChart extends React.Component {
  state = {
    useCanvas: false,
  }
  render() {
    const { useCanvas } = this.state
    const BarSeries = useCanvas
      ? HorizontalBarSeriesCanvas
      : HorizontalBarSeries
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS"
    return (
      <div>
        <XYPlot width={175} height={175} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            data={[
              { y: 2, x: 12 },
              { y: 4, x: 2 },
            ]}
          />
        </XYPlot>
      </div>
    )
  }
}
