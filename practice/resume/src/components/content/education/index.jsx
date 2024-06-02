import SectionHeader from "../section-header";
import educations from "../../../data/education.json";
import Education from "./education";

const Educations = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Education" />

      <div className="row">
        {educations.map((item, index) => (
          <Education
            key={item.id}
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

export default Educations;
