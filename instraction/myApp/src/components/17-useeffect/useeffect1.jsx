import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UseEffect2 from "./useeffect2";

const UseEffect1 = () => {
  const [message, setMessage] = useState("Hi");
  const [error, setError] = useState("");
  const [showComp, setShowComp] = useState(false);

  /*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    UseEffect asenkrondur, her zaman JSX render olduktan sonra calisir.
	 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	UseEffect'ler React'daki sideEffect'leri yönetmek için kullanılan kod bloklarıdır.
	SideEffect'ler: API call, DOM manipulation, Timer, Event listener, LocalStorage gibiduurmlarda meydana gelir

	MOUNTING : Component'in ilk render edilme bağlanma anı.

	useEffect(() => {
		console.log("sadece ilk render'da çalışır");
	}, []);

	UPDATING : Component'in render edilme durumu

	useEffect(() => {
	   console.log("UPDATING: Buradaki kodlar render ve re-render da calisir");
	 });

	useEffect(() => {
    	console.log(
    	"UPDATING-DEPENDENCY-ARRAY(DA): Buradaki kodlar dependency array icindeki degisken(ler) degistiginde calisir."
    	);
  	}, [sayac]); sayac isimli state veya prop her güncellendiğinde çalışır.

	UNMOUNTING: Component'in görünen bir component'in kaybolması hafızadan silinmesi.
   
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
  }, [error]); //bu kod parçasında error değeri değiştikçe use effect değişir

  console.log(message);

  return (
    <div className="mt-5 text-center">
      {showComp && <UseEffect2 />}

      <Button onClick={() => setMessage(Math.random())}>Set Message</Button>

      <Button onClick={() => setError(Math.random())}>Set Error</Button>

      <Button onClick={() => setShowComp((prev) => !prev)}>Toggle Comp</Button>
    </div>
  );
};

export default UseEffect1;
