import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import * as RouteComponents from "./routes";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="flex h-screen">
				<Sidebar />
				<div className="flex-1  overflow-auto ">
					<Navbar />
					<Routes>
						{Object.keys(ROUTES).map((key) => {
							const route = ROUTES[key as keyof typeof ROUTES];
							const Component =
								RouteComponents[
									route.component as keyof typeof RouteComponents
								];
							return (
								<Route
									key={route.path}
									path={route.path}
									element={<Component />}
								/>
							);
						})}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
