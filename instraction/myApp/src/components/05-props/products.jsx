import ProductCard from "./product-card";

const Products = () => {
	return (
		<div>
			<ProductCard title="Sony X5 Headset" price="$54.99">
				Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit.
				Aperiam, itaque.
			</ProductCard>

			<ProductCard title="Samsung S7 Headset" price="$44.99">
				Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
				Dolores, doloribus!
			</ProductCard>
		</div>
	);
};

export default Products;