import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";

const CurrencyList = () => {
	const { currencies } = useContext(StoreContext);
	const arrCurrencies = Object.entries(currencies);

	return (
		<Dropdown align="end">
			<Dropdown.Toggle variant="primary">Exchange Rates</Dropdown.Toggle>

			<Dropdown.Menu style={{ height: "80vh", overflowY: "auto" }}>
				{arrCurrencies.map((item) => (
					<Dropdown.Item key={item[0]}>
						1 {item[0]} : {(1 / item[1]).toFixed(2)}₺
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default CurrencyList;