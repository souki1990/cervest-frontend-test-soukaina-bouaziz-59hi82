import React from "react";

const Table = (props) => {
const data = props.data

  return (
    <div className="row">
    <div className="col s12">
      <table>
        <thead>
          <tr>
          <th>Region Name</th>
          {data && data.labels.map((h,index) => <th key={index}>{h}</th>)}</tr>
        </thead>
        <tbody>
     {data &&
            Object.keys(data.regions).map((key,index) => (
              <tr key={`col${index}`}>
                <th key={`col${key}`}>{key}</th>
                {data.regions[key].map((col,index)=> (
                  <td key={index}>{col}</td>
                ))}
              </tr>
              ))}
      </tbody>
      </table>

    </div>
  </div>
  )
};

export default Table;
