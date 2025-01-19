import React from "react";

const Home: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen ">
			<h1 className="text-4xl font-bold text-blue-500">
				Welcome to the Home Page
			</h1>
			<p className="text-lg mt-4">This is the main dashboard.</p>
		</div>
	);
};

export default Home;
