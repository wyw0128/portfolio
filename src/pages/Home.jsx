import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PetsIcon from "@mui/icons-material/Pets";
import AlbumIcon from "@mui/icons-material/Album";
import Button from "../components/Button";
import IconCard from "../components/IconCard";
import CV from "../assets/pdf/Aria-Wu-Cover-Letter.pdf";
import "./Home.scss";

const iconCardData = [
  {
    svg: <ComputerIcon fontSize="large" />,
    contentTitle: "Front-end Dev",
    content: "dvfsefs",
  },
  {
    svg: <AccessibilityNewIcon fontSize="large" />,
    contentTitle: "Dance-lover",
    content: "dvfsefs",
  },
  {
    svg: <PetsIcon fontSize="large" />,
    contentTitle: "Cat-lover",
    content: "dvfsefs",
  },
  {
    svg: <AlbumIcon fontSize="large" />,
    contentTitle: "Music Fan",
    content: "dvfsefs",
  },
];

export default function home() {
  // NOTE:
  const downloadCVHandler = () => {
    window.open(CV);
  };

  return (
    <>
      <section className="basic-infos">
        <div>
          <img src="#" alt="self-portrait" />
        </div>
        <div className="basic-info">
          <span>Front-end Developer</span>
          <h5 className="basic-info-titile">Aria Wu</h5>
          <p className="basic-info-content">
            Hi, I am a front-end developer based in Sydney!
          </p>
          <div className="actions">
            <Button onClick={downloadCVHandler} type="round">
              RESUME
            </Button>
            {/* NOTE: mailto */}
            <a href="mailto:yiweiwu0128@gmail.com">CONTACT</a>
          </div>
        </div>
      </section>
      <section className="about-me">
        <h5>
          <b>About me</b>
        </h5>
        {/* <IconCard
          svg={<ComputerIcon fontSize="large" />}
          contentTitle="Front-end Dev"
          content="dvfsefs"
        /> */}
        <div className="icon-cards">
          {iconCardData.map((data, index) => (
            <div className="icon-card-wrapper">
              <IconCard
                key={index}
                svg={data.svg}
                contentTitle={data.contentTitle}
                content={data.content}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
