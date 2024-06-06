import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const State = () => {
    {/* const [degisken , setDegisken] = useState(0) -> state kullanım şeli 
        
      useState(0) -> useState hook'u değişkenin saklayacağı il değeri parametre olarak alır. Bu ilk değer 
      numeric,string,object,array olabilir. 
      Not: Set fonksiyonları asenkron yapılar oldukları için peş peşe 
      çağrılmaları gerektiği durumlarda (döngüler vs) kullanılmaz.
        */}
	const [classes, setClasses] = useState("bg-dark text-light");


	return (
		<Container className={classes} style={{ height: "100vh" }}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-4 mt-4">
				<Button onClick={()=>setClasses("bg-dark text-light")}>Dark Mode</Button>
				<Button onClick={()=>setClasses("bg-light text-dark")}>Light Mode</Button>
			</div>
		</Container>
	);
};

export default State;