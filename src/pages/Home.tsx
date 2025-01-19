import Card from "@/components/Card";
import React from "react";
import { FaUser } from "react-icons/fa";

const Home: React.FC = () => {
	const data = [
		{
			icon: <FaUser />,
			title: "Total users",
			count: 200,
			color: "blue",
		},
		{
			icon: <FaUser />,
			title: "Active users",
			count: 200,
			color: "lime",
		},
		{
			icon: <FaUser />,
			title: "Non actoive users",
			count: 200,
			color: "red",
		},
		{
			icon: <FaUser />,
			title: "Non actoive users",
			count: 200,
			color: "lime",
		},
	];
	return (
		<div className="mx-8">
			<div className="grid grid-cols-4 gap-6 justify-between">
				{data.map((item, index) => {
					return <Card key={index} item={item} />;
				})}
			</div>
		</div>
	);
};

export default Home;
