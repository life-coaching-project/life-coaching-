import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   axios.get("/api/survey/getthequestion").then(({response}) => {
  //     console.log("hola",response);
  //   })
  // });

  const [loading, setLoading] = useState(true);
  const [servey, setservey] = useState([]);

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

  return (
    <div className={styles.main_container}>
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
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              <h2>Doing stuff with data</h2>
              {servey.map((item) => (
                <span>{item.question}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
