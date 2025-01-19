import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Sidebar: React.FC = () => {
	return (
		<div className="h-screen w-64  text-white flex flex-col">
			<div className="p-4 text-2xl font-bold ">
				<img src="/logos/logo.png" alt="" />
			</div>
			<nav className="flex-grow p-4">
				<ul className="space-y-2">
					{Object.keys(ROUTES).map((key) => {
						const routeKey = key as keyof typeof ROUTES;
						return (
							<li key={routeKey}>
								<NavLink
									to={ROUTES[routeKey].path}
									className={({ isActive }) =>
										`block p-2 rounded ${
											isActive ? "bg-[#0c0e12] " : "hover:bg-gray-300"
										} rounded-xl`
									}
								>
									{ROUTES[routeKey].label}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			{/* <div className="p-4 border-t border-gray-700">
				<button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
					Logout
				</button>
			</div> */}
		</div>
	);
};

export default Sidebar;
