import React from "react";

const PageHeader = ({ title }) => {
	return (
		<h2 className="bg-info bg-gradient p-3 rounded-3 text-center">
			{title}
		</h2>
	);
};

export default PageHeader;