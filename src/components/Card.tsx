import React from "react";

interface CardItem {
	icon: React.ReactNode;
	title: string;
	count?: number;
	color: string;
}

interface CardProps {
	item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => (
	<div className="bg-white p-6 rounded-2xl shadow-sm ">
		{item && (
			<>
				<div
					className={`w-[50px] h-[50px]  text-white rounded-xl flex items-center justify-center bg-${item.color}-700`}
				>
					{item.icon}
				</div>
				<div className="flex flex-col text-gray-600">
					<h2 className="text-md mt-3 font-medium">{item.title}</h2>
				</div>
				{item.count && <h1 className="text-5xl font-bold">{item.count}</h1>}
			</>
		)}
	</div>
);

export default Card;
