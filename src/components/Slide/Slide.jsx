import React from "react";
import icons from "../../constants/icons";
import "./Slide.scss";
export default function Slide(props) {
  const { label, content, img } = props;
  const Icon = icons.find((i) => i.label === label)?.icon;
  return (
    <div
      className="slider-container"
      // style={{
      //   position: "relative",
      //   border: "1px solid black",
      //   borderRadius: 8,
      // }}
    >
      <div className="icon-container">
        {/* <div style={{ position: "absolute", left: -15, top: -15 }}> */}
        <Icon fontSize="large" />
      </div>

      <div
        className="slide-contents-container"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
      >
        <div>
          {/* <div style={{ paddingLeft: 24, flex: 1 }}> */}
          <p>{content.contentDetail}</p>
          <p>{content.contentName}</p>
          <p>{content.contentType}</p>
        </div>
        {/* <div style={{ flex: 1, height: 200 }}> */}
        <img src={img.src} alt={img.alt} width="100%" height="200" />
      </div>
    </div>
  );
}
