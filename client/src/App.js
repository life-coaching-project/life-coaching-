import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Feed from "./components/Main/Feed";
import Profil from "./components/Main/Profil";
import PostBlogs from "./components/Main/PostBlogs";
import AboutUs from "./components/Main/AboutUs";
import {UserContext} from "./components/Main/reducers/index" 
function App() {
// const [user,setUser]=useState("")
  return (
    <Routes>
      {<Route path="/login" exact element={<Main />} />}
      <Route path="/Feed" element={<Feed />} />
      {/* <UserContext.Provider> */}
      <Route path="/Profil" element={<Profil />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/PostBlogs" element={<PostBlogs />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/" exact element={<Login />} />
      {/* </UserContext.Provider> */}
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
