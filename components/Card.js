import React from "react";
import { THREE_SHOLD } from "../index.js"

const Card = (props) => {
  const days = props.days;

  return (
    <div className="card_component">
      <div className="row">
        <div className="col s12 m12">
          <div className="card darken-1">
            <div className="card-content">
              <h3>{days}</h3>
              <p> {`${days==1?`day`:`days`} above ${THREE_SHOLD} mm`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Card