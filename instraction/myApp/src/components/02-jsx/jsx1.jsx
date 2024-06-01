
//Kural 1: Component isimleri PascalCase olmalıdır
//Kural2: return içinde mutlaka bir parent element olmalı
//Kural3: Elementlerin attribute'ları camelCase olmalı
//Kural4: Bazı attribute'lar JS için özel bir anlam taşıdığı için JSX içinde isimleri değiştirilmiştir.
//class ->className for -> labelFor


const Jsx1 = () => {
	return (
		<section>
			<div className="red">Hello JSX</div>
			<div>Hello second line</div>
            <label htmlFor="">Html for</label>
		</section>
	);
};

export default Jsx1;