import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();

  const [servey, setservey] = useState([]);
  const questions = () => {
    console.log("hhhhhhhhhhh", servey[1][0]);
  };

  const [cout,setcout] = useState(0);
  


  useEffect(() => {
    console.log("zzzzzzzzzzzzzzz");
    axios
      .get("http://localhost:3000/api/survey/getthequestion")
      // .get("40ffaecd371b47e094e482303b45c7a4")
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
          <h2>Life check survey</h2>
          {servey.slice(0, 12).map((item) => (
            <div>
              <span>{item.question}</span>
              <div>{item.option1}</div>
              <div>{item.option2}</div>
              <div>{item.option3}</div>
              <div>{item.option4}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Main;
