import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ClerkProvider
			publishableKey={
				"pk_test_ZXZpZGVudC1mb3hob3VuZC0xNC5jbGVyay5hY2NvdW50cy5kZXYk"
			}
			afterSignOutUrl="/"
		>
			<App />
		</ClerkProvider>
	</StrictMode>
);
