import React, { useState } from "react";
import Button from "../../components/Button/Button";
import IconCard from "../../components/IconCard/IconCard";
import Slide from "../../components/Slide/Slide";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import selfPortrait from "../../assets/images/selfPortrait.jpg";
import food from "../../assets/images/food.jpg";
import music from "../../assets/images/music.jpg";
import game from "../../assets/images/game.jpg";
import movie from "../../assets/images/movie.jpg";
import CV from "../../assets/CV.pdf";
import "./Home.scss";

const iconCardData = [
  {
    contentTitle: "Front-end Dev",
    content:
      "Coding is one of my hobbies. I enjoy the process of building websites step by step from beginning to the end. The process of finding and solving problems makes them shiner.",
  },
  {
    contentTitle: "Dance-lover",
    content:
      "I like dancing Jazz and Kpop. It makes me feel so happy. It is also one kind of exercises, and it helps me make friends with same hobby and we can dance together.",
  },
  {
    contentTitle: "Cat-lover",
    content:
      "I am a huge pet-lover, and I have a three-year-old cat named Cookie. Sometimes he might be naughty, but I feel cozy with his accompany.",
  },
  {
    contentTitle: "Music Fan",
    content:
      "I guess no one would reject to music. I have a very mixed taste in music, for example, Rap, Kpop, songs with good lyrics... I'll turn on the speaker now.",
  },
];

const slidesData = [
  {
    label: "movie",
    content: {
      contentDetail: `"This is water. What I want is the ocean."`,
      contentName: "Soul by Pixar",
      contentType: "Movie",
    },
    img: { src: movie, alt: "Movie Soul by Disney" },
  },
  {
    label: "music",
    content: {
      contentDetail: `"Shut Down by Black Pink"`,
      contentName: "K-Pop",
      contentType: "Music",
    },
    img: { src: music, alt: "Black Pink" },
  },
  {
    label: "game",
    content: {
      contentDetail: `"The International Dota2 Championships"`,
      contentName: "TI Shield",
      contentType: "Game",
    },
    img: { src: game, alt: "TI shield" },
  },
  {
    label: "food",
    content: {
      contentDetail: `"Black Angel Pasta", "Lemon Iced Tea"`,
      contentName: "Brunch",
      contentType: "Food",
    },
    img: { src: food, alt: "squid pasta and drinks" },
  },
];

export default function Home() {
  // NOTE:
  useDocumentTitle("Home");
  const [curSlide, setCurSlide] = useState(0);
  // const downloadCVHandler = () => {
  //   window.open(process.env.PUBLIC_URL + "/CV.pdf", "_blank");
  //   window.open(CV, "_blank");
  // };

  const showSlideClass = `translateX(calc(${-50 * curSlide}% - ${
    1 * curSlide
  }rem))`;
  // const showSlideClass = `translateX(calc(${-50 * curSlide}%)`;

  const preSlideHandler = () => {
    if (curSlide === 0) {
      setCurSlide(slidesData.length - 1);
    } else setCurSlide((pre) => --pre);
  };

  const nextSlideHandler = () => {
    if (curSlide === slidesData.length - 1) {
      setCurSlide(0);
      // NOTE: ++pre will first increment the variable and then use it; pre++ will first use it and then increment.
    } else setCurSlide((pre) => ++pre);
  };

  return (
    <div className="page">
      <section className="basic-infos">
        <div>
          <img
            className="self-portrait"
            src={selfPortrait}
            alt="self-portrait"
          />
        </div>
        <div className="basic-info">
          <span>Front-end Developer</span>
          <h5 className="basic-info-titile">Aria Wu</h5>
          <p className="basic-info-content">
            Hi, I am a front-end developer based in Sydney!
          </p>
          <div className="actions">
            {/* <Button onClick={downloadCVHandler} type="round">
              RESUME
            </Button> */}
            <a href={CV} target={"_blank"}>
              RESUME
            </a>
            {/* NOTE: mailto */}
            <a href="mailto:yiweiwu0128@gmail.com">CONTACT</a>
          </div>
        </div>
      </section>
      <section>
        <h5 className="section-underline">About me</h5>
        <div className="icon-cards">
          {iconCardData.map((data, index) => (
            <div key={index} className="icon-card-wrapper">
              <IconCard
                contentTitle={data.contentTitle}
                content={data.content}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="favorites">
        <h5 className="section-underline">Favourates</h5>
        <div
          className="sliders-container"
          style={{
            transform: showSlideClass,
            transitionDuration: "0.5s",
          }}
        >
          {slidesData.map((data, index) => (
            <div key={index} className="slide-wrapper">
              <Slide label={data.label} content={data.content} img={data.img} />
            </div>
          ))}
        </div>
        <div className="actions sliders-btn">
          <Button onClick={preSlideHandler} type="slider">
            &larr;
          </Button>
          <Button onClick={nextSlideHandler} type="slider">
            &rarr;
          </Button>
        </div>
      </section>
    </div>
  );
}
