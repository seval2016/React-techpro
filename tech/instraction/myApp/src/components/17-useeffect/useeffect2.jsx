import React, { useEffect } from "react";

const UseEffect2 = () => {
	useEffect(() => {
		
		return () => {
			console.log(
				"UNMOUNTING: Bu kodlar component hafizadan atilmadan hemen once calisir."
			);
		};

	}, []);

	return (
		<div>
			<h3>Hello useEffect</h3>
		</div>
	);
};

export default UseEffect2;