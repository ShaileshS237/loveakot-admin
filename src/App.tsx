import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ROUTES } from "./constants/routes";
import * as RouteComponents from "./routes";

function App() {
	return (
		<Router>
			<div className="h-screen grid grid-cols-[16rem_auto]">
				<Navbar />
				<div className=" p-4 overflow-y-auto">
					<Routes>
						{Object.keys(ROUTES).map((key) => {
							const route = ROUTES[key as keyof typeof ROUTES];
							const Component =
								RouteComponents[
									route.component as keyof typeof RouteComponents
								]; // Dynamically load the component
							return <Route path={route.path} element={<Component />} />;
						})}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
