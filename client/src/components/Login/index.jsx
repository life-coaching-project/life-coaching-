import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [user, setUser] = useState("");

  const error = "";

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("borni", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try{
    // 	const  url ="http://localhost:3000/api/auth"
    // 	await axios.get(url)
    // }
    // (async () => {
    // 	try {
    // 	  const response = await axios.get("http://localhost:3000/api/auth")
    // 	  console.log(response.data.url);
    // 	  console.log(response.data.explanation);
    // 	} catch (error) {
    // 	  console.log(error.response.body);
    // 	}
    //   })()

    try {
      const url = "http://localhost:3000/api/auth";
      await axios.post(url, data).then((response) => {
        if (
          response.data === "Invalid Password" ||
          response.data === "Invalid Email or Password"
        ) {
          alert("Invalid Password");
          navigate("/login");
        } else if (response.data === "logged in successfully")
          setUser(data.email);
        navigate("/profil");
        // console.log('user',user)
      });
    } catch (error) {
      console.log(error);
    }
  };
  // let store = createStore(PersonlData)
  // store.subscribe(()=>console.log(store.getStorage()))
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <div> {console.log("user", user)}</div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}

            <button type="submit" className={styles.green_btn}>
              Sing In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
