import React from "react";
import { useNavigate } from "react-router-dom";

// import Button from "@mui/material/Button";
import Button from "./Button";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };
  const linksData = [
    {
      path: "/",
      name: "ABOUT",
    },
    {
      path: "/resume",
      name: "RESUME",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];

  return (
    <div className="header">
      <div className="header-container">
        <h2 className="header-name">
          <strong>Aria</strong> Wu
        </h2>
        <div className="button-container">
          {/* NOTE: 
          need to write return;
          ()=>{} 
          no need to write return;
          ()=>() */}

          {linksData.map((link, index) => (
            <Button
              key={index}
              type="normal"
              onClick={() => {
                navigateHandler(link.path);
              }}
            >
              {link.name}
            </Button>
          ))}
          {/* {linksData
            .filter((link) => link.name === "Contact")
            .map((link, index) => (
              <Button
                key={index}
                onClick={() => {
                  navigateHandler(link.path);
                }}
              >
                {link.name}
              </Button>
            ))} */}
        </div>
      </div>
    </div>
  );
}
