import { GoPerson } from "react-icons/go";
import { RiHomeFill } from "react-icons/ri";
export const ROUTES = {
	Home: {
		path: "/",
		label: "Home",
		icon: <RiHomeFill />,
		component: "HomeRoute",
	},
	Login: {
		path: "/login",
		label: "User Management",
		icon: <GoPerson />,
		component: "LoginRoute",
	},
};
