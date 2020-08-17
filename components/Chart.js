import React, { Component ,useRef, useEffect, useState, memo } from "react";
import Chartjs from "chart.js";

const chartConfigOptions = {
    type: 'line',
    data: {},
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize:2
                }
            }]
        }
    }
}

const colorOptions={"R1":"RGB(148,57,174)","R2":"RGB(215,57,104)","R3":"RGB(144,178,91)"}

const Chart = (props) => {

const refChart = useRef();
const [chartConfig, setChartConfig] = useState();
//const [chartInstance, setChartInstance] = useState();

useEffect(() => {
  if(props.data) {
  chartConfigOptions.data.labels = props.data.labels;
  chartConfigOptions.data.datasets= Object.keys(props.data.regions).map(key=>({label:key,data:props.data.regions[key],backgroundColor:["transparent"],
      borderColor: colorOptions[key]}))
  setChartConfig(chartConfigOptions)
  }
},[props.data])

useEffect(()=>{
  if(refChart && refChart.current && chartConfig){
   const chart = new Chartjs(refChart.current,chartConfig)
   //setChartInstance(chart)
  }
},[refChart,chartConfig])

return (
<canvas ref={refChart}>Chart</canvas>)
}

export default Chart;


