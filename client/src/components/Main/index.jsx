import styles from "./styles.module.css";
import { useHistory , Switch, Route , useNavigate  } from "react-router-dom";
import NavBar from "./NavBar"
const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  
//  const history = useHistory();
  return (
    <div >
       <NavBar/>
    </div>
  );
};

export default Main;
