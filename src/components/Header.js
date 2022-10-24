import React from "react";
import Button from "@mui/material/Button";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <h2 className="header-name">
          <strong>Yiwei</strong> Wu
        </h2>
        <div>
          <Button color="inherit">About</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
        </div>
      </div>
    </div>
  );
}
