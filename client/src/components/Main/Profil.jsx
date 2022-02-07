import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { UserContext } from "./reducers/index";
import style from  "./styleProfil.css";

const Profil = (props) => {
  const [data, setData]= useState(false)
  const [user, setUser] = useState("");
  const [profil, setProfil] = useState("");
  const [test, settest] = useState({});
  const [view, setview]= useState(true)
  const lborni = [];
  console.log("allah ", user);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth")
      .then((res) => {
        console.log("khalil", res.data);
        setProfil(res.data);
        for (let i = 0; i < res.data.length; i++) {
          console.log(cherche, "cherche", res.data[i].email, "email");
          res.data[i].email == cherche && settest(res.data[i]);
        }
      })

      .catch((error) => console.log(error));
  }, []);
  const cherche = localStorage.getItem("borni");
const profileImgHandler = (e) => {
const reader = new FileReader();
reader.onload=()=>{
  if( reader.readyState==2){
setData({profileImg:reader.result})
//// for updating a tomporary photo insted of usni cloud ///
  }
}
reader.readAsDataURL(e.target.files[0])
}
const { profileImg} = data

  return (
       <div id="nav">
        <NavBar />
                    <h1 className="heading"></h1>
                    <div className="img-holder">
                        <img src={ profileImg} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" class="btn btn-primary btn-lg" name="image-upload" id="input" onChange={ profileImgHandler} />
                    <div className="label">
          <label className="image-upload" htmlFor="input">
                        <i className="material-icons"></i>
                       <h1 id='t'>{test.firstName+' '+test.lastName}</h1>
                    </label>
          </div>
      <h1 class="card--title">
         <span class="card--span">26</span>
      </h1>

      <h2 class="card--subtitle">London</h2>

      <ul class="card--list">
        <li class="card--listItem">
          <p class="card--p card--p-stat">80K</p>
          <p class="card--p card--p-type">Followers</p>
        </li>
        <li class="card--listItem">
          <p class="card--p card--p-stat">803K</p>
          <p class="card--p card--p-type">Likes</p>
        </li>
        <li class="card--listItem">
          <p class="card--p card--p-stat">1.4K</p>
          <p class="card--p card--p-type">Photos</p>
        </li>
      </ul>
   

    <div class="attribution">
      
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noopener noreferrer"
        target="_blank"
        ></a
      >
      <a href="https://www.frontendmentor.io/profile/a-sauvaget"
        ></a>
    </div>
  {/* </body>
</html> */}

    </div>
  );
};

export default Profil;
