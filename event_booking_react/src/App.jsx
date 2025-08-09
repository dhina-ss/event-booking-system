import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<>
						<Header />
						<NavMenu />
						<Dashboard />
					</>} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
