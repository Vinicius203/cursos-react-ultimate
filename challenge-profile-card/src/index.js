import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import avatar from "./assets/eu.jpeg";
import "./index.css";

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
      <Skill name="HTML+CSS" emoji="👏" backgroundColor="red" />
      <Skill name="React" emoji="🫡" backgroundColor="blue" />
      <Skill name="SQL" emoji="👏" backgroundColor="green" />
      <Skill name="Python" emoji="🫡" backgroundColor="orange" />
      <Skill name="Pandas" emoji="🫡" backgroundColor="orange" />
      <Skill name="Git and Github" emoji="👏" backgroundColor="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
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
