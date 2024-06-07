import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UseEffect2 from "./useeffect2";

const UseEffect1 = () => {
	const [message, setMessage] = useState("Hi");
	const [error, setError] = useState("");
	const [showComp, setShowComp] = useState(false);

	/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    USE EFFECT asenkrondur, her zaman JSX render olduktan sonra calisir.
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
	useEffect(() => {
		console.log("MOUNTING: Buradaki kodlar sadece render da calisir");
	}, []);
	

	useEffect(() => {
		console.log("UPDATING: Buradaki kodlar render ve re-render da calisir");
	});

	useEffect(() => {
		console.log(
			"UPDATING-DEPENDENCY-ARRAY(DA): Buradaki kodlar dependency array icindeki degisken(ler) degistiginde calisir."
		);
	}, [error]);

	
	console.log(message);

	return (
		<div className="mt-5 text-center">
			{showComp && <UseEffect2 />}

			<Button onClick={() => setMessage(Math.random())}>
				Set Message
			</Button>

			<Button onClick={() => setError(Math.random())}>Set Error</Button>

			<Button onClick={() => setShowComp((prev) => !prev)}>
				Toggle Comp
			</Button>
		</div>
	);
};

export default UseEffect1;