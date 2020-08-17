import React, { Component, useState, useEffect, useMemo } from "react";
import { render } from "react-dom";
import Appbar from "./components/Appbar";
import AlertShowcase from "./components/AlertShowcase";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Table from "./components/Table";
import { getData } from "./utils/api";
import { toTableFormat} from "./utils/transform"
import { getDaysOverThreeShold } from "./utils/calculate"
import "./style";

export const THREE_SHOLD = 15;

const App = () => {

const [data, setData ] = useState();
const [processedData, setProcessedData ] = useState();
const [daysOverThreeShold,setDaysOverThreeShold] = useState()
const [error,setError] = useState();

const loadData = async() => {
const data = await getData();
  if (!data.error) {
    setData(data);
  }
  else {
    setError(data.error)
  }
}

useEffect(() => {
loadData();
},[])

 useMemo(() => {
   if (data){
  const transformedData = toTableFormat(data);
  const days = getDaysOverThreeShold(THREE_SHOLD,data)
  setTimeout(setProcessedData({regions:transformedData.regions,labels:transformedData.labels}),3000)
  setDaysOverThreeShold(days)
  }
}, [data]);
 

return(
  <div>
    <Appbar />
    {!error && <div className="container">
      <h4>1. Table</h4>
     { processedData && <Table data={processedData}/>}
      <h4>2. Chart</h4>
     { processedData && <Chart  data={processedData} />}
      <h4>3. ExtremeEventAlert component</h4>
      <AlertShowcase />
      <h4>4. Card</h4>
      <Card days = {daysOverThreeShold} />
    </div> }
    {error && <h3> Something went wrong</h3>}
    </div> 
)
};

render(<App />, document.getElementById("root"));
