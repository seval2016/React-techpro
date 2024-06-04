import images from "./data.json";
import "./gallery.scss";

const Gallery = () => {
	return (
		<div className="gallery">
			{images.map((item) => (
				<div className="item" key={item.id}>
					<img src={`/img/${item.image}`} alt="" />
				</div>
			))}
		</div>
	);
};

export default Gallery;