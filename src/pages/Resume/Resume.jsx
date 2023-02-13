import React from "react";
import TimelineCard from "../../components/TimelineCard/TimelineCard";
import SkillBar from "../../components/SkillBar/SkillBar";
import "./Resume.scss";

const timelineExperienceData = [
  {
    year: "2022",
    company: "CarryU Pty, Ltd, Sydney",
    title: "Front-end Developer",
    details:
      "Designed and developed a modern, optimized, and responsive website for CarryU using Next.js.",
  },
  // {
  //   year: "2021",
  //   company: "company2",
  //   title: "General Accountant",
  //   details:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ut ab ullam excepturi optio autem sit asperiores veniam adipisci laudantium ipsa suscipit odit ea eos at possimus consectetur, dicta magnam?",
  // },
  // {
  //   year: "2020",
  //   company: "company3",
  //   title: "General Accountant",
  //   details:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur accusantium consectetur illo rerum. Asperiores sint cupiditate placeat nulla voluptatibus, culpa ullam dolorem cum eos deleniti delectus officiis sed dolor.",
  // },
  // {
  //   year: "2019",
  //   company: "company4",
  //   title: "Front-end Developer",
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam mollitia cupiditate quisquam, culpa non, earum obcaecati ducimus quod est sint distinctio recusandae, nemo vero autem nihil minima assumenda quam ullam.",
  // },
];

const timelineEducationData = [
  {
    year: "2022",
    company: "UNSW",
    title: "Graduate Certificate in Computing",
    details:
      "The Graduate Certificate in IT at UNSW is a comprehensive program that provides students with the knowledge and skills they need to succeed in the rapidly-evolving field of information technology. Got full mark in COMP9021.",
  },
  {
    year: "2019",
    company: "USYD",
    title: "Master of Professional Accounting",
    details:
      "Got master degree of Master of Professional Accounting in USYD in 2019, trained me with attention to detail personality which is good for coding as well.",
  },
  {
    year: "2017",
    company: "BJFU (Beijing Forestry University)",
    title: "Bachelor of Business English",
    details:
      "Got bachelor degree from BJFU in 2017 and got a GPA of 84 out of 100.",
  },
  // {
  //   year: "2019",
  //   company: "company4",
  //   title: "Front-end Developer",
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam mollitia cupiditate quisquam, culpa non, earum obcaecati ducimus quod est sint distinctio recusandae, nemo vero autem nihil minima assumenda quam ullam.",
  // },
];

const codingBarData = [
  { name: "JavaScript", percentage: "85%" },
  { name: "NextJs", percentage: "80%" },
  { name: "ReactJS", percentage: "80%" },
  { name: "HTML/CSS/SASS", percentage: "85%" },
  { name: "Python", percentage: "80%" },
  { name: "Git Version Control", percentage: "80%" },
];

const dataBarData = [{ name: "SQL", percentage: "75%" }];
export default function resume() {
  return (
    <div className="page">
      <div className="page-title-container grey-container">
        <h2 className="page-title">Resume</h2>
      </div>
      <section className="timelines two-column-grid">
        <div className="experience">
          <h6 className="timeline-title section-underline">Experience</h6>
          <div className="timeline">
            {timelineExperienceData.map((data, index) => (
              <TimelineCard value={data} key={index} />
            ))}
          </div>
        </div>
        <div className="education">
          <h6 className="timeline-title section-underline">Education</h6>
          <div className="timeline">
            {timelineEducationData.map((data, index) => (
              <TimelineCard value={data} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="projects"></section>
      <section className="skillbars two-column-grid">
        <div className="coding-skill">
          <h6 className="section-underline">Coding Skills</h6>
          {codingBarData.map((data, index) => (
            <SkillBar value={data} key={index} />
          ))}
        </div>
        <div className="data-skill">
          <h6 className="section-underline">Data Skills</h6>
          {dataBarData.map((data, index) => (
            <SkillBar value={data} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
