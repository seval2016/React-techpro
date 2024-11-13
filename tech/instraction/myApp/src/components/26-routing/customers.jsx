import React from "react";
import { Link } from "react-router-dom";

const Customers = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/customers/45">John Doe</Link>
				</li>
				<li>
					<Link to="/customers/33">Barbara Stone</Link>
				</li>
				<li>
					<Link to="/customers/71">Michael White</Link>
				</li>
			</ul>
		</div>
	);
};

export default Customers;