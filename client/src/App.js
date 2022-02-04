import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Feed from "./components/Main/Feed"
import Profil from "./components/Main/Profil";
function App() {
	//const user = 1;

	return (
		
		<Routes>
			{ <Route path="/login" exact element={<Main />} />}
			  <Route path="/Feed"  element={<Feed />} />
			  <Route path="/Profil" element={<Profil />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

	
	);
}

export default App;
