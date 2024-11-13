import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiPlus, TfiMinus, TfiReload } from "react-icons/tfi";

const Counter1 = () => {
	const [counter, setCounter] = useState(0);

	return (
		<Container className="mt-4">
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="danger"
					onClick={() => setCounter((prev) => prev - 1)}
				>
					<TfiMinus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button
					variant="danger"
					onClick={() => setCounter((prev) => prev + 1)}
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

export default Counter1;