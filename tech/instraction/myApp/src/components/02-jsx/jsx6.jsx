const Jsx6 = () => {
  const users = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Susan", lastName: "Doe" },
    { id: 3, firstName: "Alice", lastName: "Doe" },
    { id: 4, firstName: "Michael", lastName: "Doe" },
    { id: 5, firstName: "Josheph", lastName: "Doe" },
  ];

  /* BIR ZAMANLAR JAVASCRIPT

    let strUsers = "";
    users.forEach(item=> {
        strUsers += `<li>${item.firstName} ${item.lastName}</li>`
    })
    document.getElementById("list").innerHTML = strUser; */

// JSX yapilarinda geriye deger donduren iteration methodlari kullanilir.

// Map kullanildiginda mutlaka map icindeki parent elemana unique key degeri verilmelidir

// Not: Jsx içerisinde jsx kullanılacaksa (while ,for,foreach gibi yapılarda) muhakkak map kullanılmalı

// Not: Bütün elemanlar gezilecekse veya tüm elemanlar görüntülenecek yada işleme dahil olacaksa kesinlikle map (iteration methodu) kullanılmalı

  /*

  foreach ile kullanamıyoruz. Map ile olur
  
  let strUsers = null;

  users.forEach((item) => {
    strUsers += (
      <li>
        {item.firstName} {item.lastName} 
      </li>
    );
  });

  return <div>{strUsers}</div>; 
  //sonuc :null[object Object][object Object][object Object][object Object][object Object]
  */

  /*
  //1.yol
  const mappedUsers = users.map((item) => (
    <li key={item.id}>
      {item.firstName} {item.lastName}
    </li>
  ));

  return <div>{mappedUsers}</div>;

  */
  
// Önemli bir hata: "Each child in a list should have a unique "key" prop."
//Keyler unic bir değer olmalı. Bu key'ler ne işe yarar. Dinamik listelerde değişen elemanı almak için kullanılır 
//yani değişiklik yapılanın dışındaki elemanlarda gereksiz rerenderlar olmasın diye yapılır
  
  return (
		<ul>
			{users.map((item) => (
				<li key={item.id}>
					{item.firstName} {item.lastName}
				</li>
			))}
		</ul>
	);
};

export default Jsx6;
