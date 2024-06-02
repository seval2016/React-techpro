const Style3 = () => {
	const isRadius = true;
	const padding = "10px";

	const titleStyle = {
		color: "red",
		fontSize: "1.5rem",
		textShadow: "3px 3px 5px black",
		border: "1px solid gray",
		padding,
		borderRadius: isRadius ? "30px" : "0",
	};

	return (
		<div>
			<h1>STYLES</h1>

			<h2 style={titleStyle}>Internal style</h2>

			<h2
				style={{
					...titleStyle,
					color: "blue",
					backgroundColor: "aliceblue",
				}}
			>
				Other styles
			</h2>
		</div>
	);
};

export default Style3;