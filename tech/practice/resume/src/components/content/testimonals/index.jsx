
import SectionHeader from "../section-header";
import testimonals from "../../../data/testimonals.json";
import Testimonal from "./testimonal";

const Testimonals = () => {
	return (
		<section id="testimonials" className="testimonials">
			<SectionHeader title="Testimonials" />

			<div className="testimonial-carousel">
				{testimonals.map((item) => (
					<Testimonal
						key={item.id}
						image={item.image}
						name={item.name}
						message={item.message}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonals;