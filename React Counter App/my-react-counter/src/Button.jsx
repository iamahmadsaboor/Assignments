import React from "react";

const Button = (props) => {


  return (
    <div>
      <button onClick={props.Function} className="btn-btn">{props.title}</button>
    </div>
  );
};

export default Button;
