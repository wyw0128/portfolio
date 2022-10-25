import React from "react";
import "./Button.scss";
export default function Button(props) {
  const btnClassNames = `button ${props.type} ${props.className}`;
  return (
    <button className={btnClassNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
