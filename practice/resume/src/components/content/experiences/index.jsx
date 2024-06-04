import SectionHeader from "../section-header";
import experiences from "../../../data/experience.json";
import Experience from "./experiences";

const Experiences = () => {
  return (
    <section id="experience" className="resume">
      <SectionHeader title="Experience" />

      <div className="row">
        {experiences.map((item, index) => (
          <Experience
            key={item.id}
            company={item.company}
            title={item.title}
            date={item.date}
            desc={item.desc}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
