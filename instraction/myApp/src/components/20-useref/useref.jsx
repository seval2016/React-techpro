import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

const UseRef = () => {
	const inputRef = useRef(null);//document.getElementById'nin react'da kullanımı. 
	//Hangi elemanı kontrol edeceksek ona özel useRef kullanılmalı

	useEffect(() => {
		const input = inputRef.current;
		input.focus();
		input.style.borderColor = "blue";
	}, []);

	return (
		<Container className="mt-4">
			<FormControl ref={inputRef} placeholder="Type something..." />{/*tanımlanan inputRef ile formControl birbirine bağlandığı yer */}
		</Container>
	);
};

export default UseRef;