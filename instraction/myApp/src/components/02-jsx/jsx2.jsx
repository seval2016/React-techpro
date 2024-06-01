

const Jsx2 = () => {
	const student = {
		firstName: "John",
		lastName: "Doe",
		city: "London",
	};

	// document.getElementById("lblName").innerHTML = name;


    // KURAL: Eger JSX icinde JS ifadesi kullanilacaksa { suslu parantez icine yazilmalidir}. 

	return (
		<div>
			<ul>
				<li>
					<b>First Name:</b>
					{student.firstName}
				</li>
				<li>
					<b>Last Name:</b>
					{student.lastName}
				</li>
			</ul>
		</div>
	);
};

export default Jsx2;