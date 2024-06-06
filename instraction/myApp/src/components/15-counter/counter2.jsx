import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiPlus, TfiMinus, TfiReload } from "react-icons/tfi";

const Counter2 = () => {
	const [counter, setCounter] = useState(0);

	const counterDown = () => {
		if (counter <= 0) return;
		setCounter((prev) => prev - 1);
	};

	const counterUp = () => {
		if (counter >= 10) return;
		setCounter((prev) => prev + 1);
	};

	return (
		<Container className="mt-4">
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="danger"
					onClick={counterDown}
					disabled={counter <= 0}
				>
					<TfiMinus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button
					variant="danger"
					onClick={counterUp}
					disabled={counter >= 10}
				>
					<TfiPlus />
				</Button>
				<Button variant="secondary" onClick={() => setCounter(0)}>
					<TfiReload />
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default Counter2;