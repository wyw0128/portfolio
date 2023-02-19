import React from "react";
import icons from "../../constants/icons";
import "./Slide.scss";
export default function Slide(props) {
  const { label, content, img } = props;
  const Icon = icons.find((i) => i.label === label)?.icon;
  return (
    <div className="slider-container">
      <div className="icon-container">
        <Icon fontSize="large" />
      </div>
      <div className="slide-contents-container">
        <div className="content-container">
          <p>{content.contentDetail}</p>
          <p>{content.contentName}</p>
          <p>{content.contentType}</p>
        </div>
        <img src={img.src} alt={img.alt} width="100%" height="200" />
      </div>
    </div>
  );
}
