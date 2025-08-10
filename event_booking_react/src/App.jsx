import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import MarriageHallPage from "./components/MarriageHallPage";

function App() {
	return (
		<Router>
			<Header />
			<NavMenu />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/hall/:id" element={<MarriageHallPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
