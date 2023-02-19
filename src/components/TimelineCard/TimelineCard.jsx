import React from "react";
import "./TimelineCard.scss";
export default function TimelineCard(props) {
  const { year, company, title, details } = props.value;
  return (
    <div className="timeline-card-container">
      <div className="card-title">
        <span className="year">{year}</span>
        <span className="company">{company}</span>
      </div>
      <p className="timeline-title">{title}</p>
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </div>
  );
}
