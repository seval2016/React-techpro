import React, { useState } from "react";
import { Container, Form, FormControl } from "react-bootstrap";

const Form1 = () => {
	const [name, setName] = useState("");

	return (
		<Container className="mt-4">
			<h2>{name}</h2>

			<Form>
                {/* CONTROLLED INPUT: Belli bir state e bagli olan form elemanlari icin kullanilan bir ifadedir. */}
				<FormControl
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				{/* UNCONTROLLED INPUT: Belli bir state e bagli olmayan form elemanlari icin kullanilan bir ifadedir. */}
				<FormControl defaultValue="Hello" />
			</Form>
		</Container>
	);
};

export default Form1;