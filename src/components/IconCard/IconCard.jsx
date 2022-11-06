import React from "react";
import icons from "../../constants/icons";
import "./IconCard.scss";

export default function IconCard(props) {
  const { contentTitle, content } = props;
  const Icon = icons.find((i) => i.label === contentTitle)?.icon;
  return (
    <div className="icon-card-container">
      {Icon && <Icon fontSize="large" />}
      <div className="icon-card-contents">
        <h4 className="icon-card-title">{contentTitle}</h4>
        <p className="icon-card-content">{content}</p>
      </div>
    </div>
  );
}
