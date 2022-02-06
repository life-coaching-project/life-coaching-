import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Feedback from "./feedback";
const Main = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const handleChange = (event) => {
    setnext(event.target.value);
  };
  // useEffect(() => {
  //   axios.get("/api/survey/getthequestion").then(({response}) => {
  //     console.log("hola",response);
  //   })
  // });
  const [next, setnext] = useState(0);
  const [loading, setLoading] = useState(true);
  const [servey, setservey] = useState([]);
  const [elem, setelem] = useState(1);
  const [feedback, setfeedback] = useState([]);

  useEffect(() => {
    console.log("zzzzzzzzzzzzzzz");
    axios
      .get("http://localhost:3000/api/survey/getthefeedback")
      .then(({ data }) => {
        console.log(data);
        setfeedback(data);
      })
      .then(() => console.log("====", servey))
      .catch((error) => console.log(error));
  }, []);
  // const settingtheresult =function(){
  const movingtofeedback = () => {
    if ((elements = servey.length)) {
      return <Feedback />;
    }
  };
  // }
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
  const resetRadioState = () => {
    setelem("");
  };
  var theelement = feedback[elem];
  console.log(theelement, "something");
  var elements = servey[elem];

  return (
    <div>
      {elem < 12 ? (
        <div className={styles.main_container}>
          {console.log("bnj", elem)}
          <nav className={styles.navbar}>
            <h1>Welcome</h1>
            <li>Profil</li>
            <li>Survey</li>
            <button></button>
            <button className={styles.white_btn} onClick={handleLogout}>
              Logout
            </button>
          </nav>
          <div>
            <div>
              <h2>Life check survey</h2>
              <h1> {elements !== undefined && elements.question}</h1> <br></br>
              <input
                type="radio"
                value="male"
                checked={next === "male"}
                onClick={resetRadioState}
                onClick={() => setelem(elem + 1)}
              />{" "}
              {elements !== undefined && elements.option1}
              <br></br>
              <input
                type="radio"
                value="male"
                checked={next === "male"}
                onClick={resetRadioState}
                onClick={() => setelem(elem + 1)}
              />{" "}
              {elements !== undefined && elements.option2}
              <br></br>
              <input
                type="radio"
                value="male"
                checked={next === "male"}
                onClick={resetRadioState}
                onClick={() => setelem(elem + 1)}
              />{" "}
              {elements !== undefined && elements.option3}
              <br></br>
              <input
                type="radio"
                value="male"
                checked={next === "male"}
                onClick={resetRadioState}
                onClick={() => setelem(elem + 1)}
              />{" "}
              {elements !== undefined && elements.option4}
              <br></br>
            </div>
          </div>
        </div>
      ) : (
        <Feedback />
      )}
    </div>
  );
};

export default Main;
