import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
