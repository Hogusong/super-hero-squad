import React from "react";
import "../css/smallBox.css";

const SmallBox = props => {
  return (
    <div className="small-box">
      <h3>
        {props.title}
        <button type="button" onClick={props.handleActivation}>
          Edit
        </button>
      </h3>
    </div>
  );
};

export default SmallBox;
