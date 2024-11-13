
import SectionHeader from "../section-header";
import Intro from "./intro";
import Skills from "./skills";

const About = () => {
	return (
		<section id="about" className="about">
			<SectionHeader title="About Me"/>
            <Intro/>
            <Skills/>			
		</section>
	);
};

export default About;