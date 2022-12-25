import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  console.log(props);
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // value 배열 반환
  const totalMaximun = Math.max(...dataPointValues); // max 값 지정

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximun}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
