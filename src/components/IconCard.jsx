import React from "react";

import "./IconCard.scss";
export default function IconCard(props) {
  const { svg, contentTitle, content } = props;
  return (
    <div className="icon-card-container">
      <div>{svg}</div>
      <div className="icon-card-contents">
        <h4 className="icon-card-title">{contentTitle}</h4>
        <p className="icon-card-content">{content}</p>
      </div>
    </div>
  );
}
