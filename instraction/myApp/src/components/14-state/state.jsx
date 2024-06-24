import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const State = () => {
    {/*
		* her component!in kendine ait bir state olur
		* oop mantığında private fields kavramına karşılık gelir 
		* State,component içerisinde kullanılan data'yı saklamaktadır. 
		* Bir component'in state bilgisine başka bir component'den ulaşılamaz.(Encapsulation)

		* state kullanım kalıbı ->const [counter , setCounter] = useState(0)
		counter : Değeri saklayan değişken
		setCounter : Değişkenin değiştirmekle görevli method 
        useState(0) -> useState hook'u değişkenin saklayacağı il değeri parametre olarak alır. Bu ilk değer 
        numeric,string,object,array olabilir. 
        Not: Set fonksiyonları asenkron yapılar oldukları için peş peşe çağrılmaları gerektiği durumlarda (döngüler vs) kullanılmaz.
       
		Rendering : Component içindeki JS ve JSX kodlarının çalıştırılması işlemine rendering denir.
		Rendering sadece ilk çalışmalarda gerçekleşir. Component hala hafizadayken yapılan değişikliklere rerendering
		denir.

		Rerendering hangi durumlarda oluşur :
		1. state güncellendiğinde yada değiştiğinde 
		2. props değiştiğinde
		3. component ilk kez render edildiğinde
		4. parent component re-render olduğunda
		5. contex güncellendiğinde	
		
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