import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/404.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<div className="bg-[#0a072c]">
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</div>
);
