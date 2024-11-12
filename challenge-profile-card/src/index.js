import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import avatar from "./assets/eu.jpeg";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Pandas",
    level: "beginner",
    color: "orange",
  },
  {
    skill: "Github",
    level: "beginner",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={avatar} alt="avatar profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Vinícius Martins Freire</h1>
      <span>
        I'm a Computer Science Student and Software Engineer Trainee, working at
        HVAR Consulting. When not working or studying, i like to play games like
        League of Legends or a story mode game like The Witcher 3.
      </span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
