import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();
  const [servey, setservey] = useState([]);
  const [cout,setcout] = useState(1);
  

  useEffect(() => {
    console.log("zzzzzzzzzzzzzzz");
    axios
      .get("http://localhost:3000/api/survey/getthequestion")
      .then(({ data }) => {
        console.log(data);
        setservey(data);
      })
      .then(() => console.log("====", servey))
      .catch((error) => console.log(error));
  }, []);
  var elem =servey[cout]
  
  return (
    <div >
      <NavBar />
   {console.log("elem",elem)}
      <div>
        <div>
          <div >
            {servey.map((item) => (
              <div className={styles.card}>
              <li>{item.question}</li>
              <input /><button>Confirm</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
