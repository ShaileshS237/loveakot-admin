import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
	useUser,
} from "@clerk/clerk-react";
import React from "react";

const Navbar: React.FC = () => {
	const { user } = useUser();
	return (
		<div className="navbar">
			<div className="flex justify-between items-center ">
				<div className="w-full flex justify-between items-center m-8">
					<h1 className="text-3xl font-semibold ">
						Good Afternoon {user?.firstName}
					</h1>

					{/* <h1 className="text-3xl font-bold mt-8">Good Afternoon Shailesh</h1> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
