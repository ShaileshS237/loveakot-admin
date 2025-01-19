import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { IoMdLogOut } from "react-icons/io";
import { useAuth, useSignUp } from "@clerk/clerk-react";

const Sidebar: React.FC = () => {
	const { signOut } = useAuth();
	const { signUp, isLoaded } = useSignUp();

	const handleSignOut = async () => {
		try {
			await signOut();
			console.log("Signed out successfully");
		} catch (error) {
			console.error("Sign-out error:", error);
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		if (!isLoaded) return;

		try {
			await signUp.create({
				redirectUrl: "/",
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="h-screen w-72  text-white bg-white flex  flex-col  rounded-xl border-r">
			<div className="p-4 text-2xl font-bold flex justify-center">
				<img src="/logos/logo.png" alt="" className="w-[85%]" />
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
										`block px-4 py-3 rounded text-lg transition-all duration-300 ${
											isActive
												? "bg-[#6e62e5] text-white"
												: "text-black hover:bg-gray-300"
										} rounded-xl`
									}
								>
									<div className="flex items-center gap-2">
										{ROUTES[routeKey].icon}
										{ROUTES[routeKey].label}
									</div>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			{/* <div className="p-4 ">
				<div id="clerk-captcha"></div>
				<button
					onClick={handleSignOut}
					className="w-full px-4 py-3 flex items-center gap-2 justify-center text-lg bg-red-700 rounded-xl active:scale-95 transition-transform duration-150"
				>
					<IoMdLogOut /> Logout
				</button>
				<button
					onClick={handleSignUp}
					className="w-full px-4 py-3 flex items-center gap-2 justify-center text-lg bg-blue-700 rounded-xl active:scale-95 transition-transform duration-150"
				>
					<IoMdLogOut /> Signin
				</button>
			</div> */}
		</div>
	);
};

export default Sidebar;
