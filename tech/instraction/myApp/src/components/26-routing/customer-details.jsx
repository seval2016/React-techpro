import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
	const params = useParams();

	console.log(params);

	return <div>CustomerDetails of {params.id}</div>;
};

export default CustomerDetails;