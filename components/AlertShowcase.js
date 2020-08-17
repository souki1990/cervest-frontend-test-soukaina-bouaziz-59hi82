import React from "react";

const AlertShowcase = () => (
  <div className="alert-bar">
    <div className="row">
      <div>
        <div className="badge success">success</div>
      </div>
      <div><div className="badge success round">success round</div></div>
      <div><div className="badge success shadow">success shadow</div></div>
      <div><div className="badge danger">danger</div></div>
      <div><div className="badge danger round">danger round</div></div>
      <div> <div className="badge round shadow">round shadow</div></div>
      <div><div className="badge warning">warning</div></div>
      <div> <div className="badge warning round">warning round</div></div>
      <div><div className="badge alert">alert shadow</div></div>
    </div>
    <div className="col s12">
     <strong> Legend </strong>
      </div>
    <div className="col s12">success: green background</div>
    <div className="col s12">warning: yellow background</div>
    <div className="col s12">danger: red background</div>
    <div className="col s12">shadow: shadow</div>
    <div className="col s12">round: round corners</div>
  </div>
);

export default AlertShowcase;
