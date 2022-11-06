import React from "react";
import icons from "../../constants/icons";
import "./ContactCard.scss";

export default function ContactCard(props) {
  const { content, label } = props;
  const Icon = icons.find((i) => i.label === label).icon;
  return (
    <>
      <Icon fontSize="large" />
      <p className="content">{content}</p>
    </>
  );
}
