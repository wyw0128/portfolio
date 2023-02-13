import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import icons from "../../constants/icons";
import "./Contact.scss";

const contactData = [
  { content: "0414 045 201", label: "phone" },
  { content: "yiweiwu0128@gmail.com", label: "email" },
  { content: "Sydney, Australia", label: "location" },
];

const linkData = [
  { url: "https://www.linkedin.com/in/yiwei-wu-164649190/", label: "linkedin" },
  { url: "https://github.com/wyw0128", label: "github" },
];

export default function contact() {
  return (
    <div className="page">
      <div className="page-title-container grey-container">
        <h2 className="page-title">Contact</h2>
      </div>
      <ul className="contact-lists">
        {contactData.map((data, index) => (
          <li className="contact-list" key={index}>
            <ContactCard content={data.content} label={data.label} />
          </li>
        ))}
      </ul>
      <div className="social-medias grey-container">
        {linkData.map((data, index) => {
          const Icon = icons.find((i) => i.label === data.label).icon;
          return (
            <a
              className="social-link"
              href={data.url}
              target="_blank"
              key={index}
            >
              <Icon fontSize="large" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
