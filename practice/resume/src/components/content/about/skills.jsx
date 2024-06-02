import Skill from "./skill";
import skills from "../../../data/skills.json";

const Skills = () => {
  return (
    <div className="skills">
      <div className="row">
        {skills.map((item) => (
          <Skill key={item.id} title={item.title} score={item.score} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
