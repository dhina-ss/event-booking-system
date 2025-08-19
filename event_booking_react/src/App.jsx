import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import MarriageHallPage from "./components/MarriageHallPage";
import MarriageHall from "./components/MarriageHall";
import SearchForm from "./components/SearchForm";

function App() {
	return (
		<Router>
			<Header />
			<SearchForm />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/marriage-hall" element={<MarriageHall />} />
				<Route path="/marriage-hall/:id" element={<MarriageHallPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
