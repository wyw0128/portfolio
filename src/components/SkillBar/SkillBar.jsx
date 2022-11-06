import React from "react";
import "./SkillBar.scss";

export default function SkillBar(props) {
  const { name, percentage } = props.value;
  return (
    <>
      <div className="skill-bar-title">
        <p>{name}</p>
        <p>{percentage}</p>
      </div>
      <div className="container">
        <div className="skills" style={{ width: `${percentage}` }}></div>
      </div>
    </>
  );
}
