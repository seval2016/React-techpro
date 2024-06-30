import React, { useContext, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

const Converter = () => {
	const [amount, setAmount] = useState(1);
	const [currency, setCurrency] = useState("EUR");
	const [result, setResult] = useState(0);
	const { currencies } = useContext(StoreContext);
	const arrCurrencies = Object.keys(currencies);

	useEffect(() => {
		const tryVal = (amount / currencies[currency]).toFixed(2);
		setResult(tryVal);
	}, [amount, currency]);

	return (
		<InputGroup>
			<Form.Control
				placeholder="Type amount"
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<Form.Select
				value={currency}
				onChange={(e) => setCurrency(e.target.value)}
			>
				{arrCurrencies.map((item) => (
					<option key={item}>{item}</option>
				))}
			</Form.Select>
			<InputGroup.Text>{result}₺</InputGroup.Text>
		</InputGroup>
	);
};

export default Converter;