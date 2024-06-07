import React from "react";

class ClassComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			message: "Hello Class Comp",
		};
	}

	componentDidMount() {
		console.log("MOUNTING: Burasi ilk render da calisir");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(
			"UPDATING: Burasi compoent her update edildiginde calisir. Sadece re-render larda calisir. Ilk render da calismaz"
		);

		if (prevState.message !== this.state.message) {
			console.log(
				"UPDATING: Burasi sadece message state i degistinde calisir"
			);
		}
	}

	componentWillUnmount() {
		console.log(
			"UNMOUNTING: Buasi compoent hafizadan atilmadan hemen once calisir"
		);
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<h3>{this.state.counter}</h3>

				<button
					onClick={() =>
						this.setState((prev) => ({ counter: prev.counter + 1 }))
					}
				>
					Click me
				</button>
			</div>
		);
	}
}

export default ClassComp;