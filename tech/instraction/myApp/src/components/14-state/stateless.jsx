import React from "react";
import { Button, Container } from "react-bootstrap";

const Stateless = () => {
	// Bu component te dark/light mode calismaz. Cunku classes degiskenin degeri degisse bile, component yenilenmedigi icin, bu degisiklik alt tarafa yansimaz.
	
	let classes = "bg-dark text-light";


    const setClasses = (mode) => { 
        if(mode==="dark"){
            classes = "bg-dark text-light";
        }
        else{
            classes = "bg-light text-dark";
        }
        console.log(classes)
     }


	return (
		<Container className={classes} style={{ height: "100vh" }}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-4 mt-4">
				<Button onClick={()=>setClasses("dark")}>Dark Mode</Button>
				<Button onClick={()=>setClasses("light")}>Light Mode</Button>
			</div>
		</Container>
	);
};

export default Stateless;