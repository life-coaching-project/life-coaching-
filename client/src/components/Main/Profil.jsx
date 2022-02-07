import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { UserContext } from "./reducers/index";
import style from "./PostBlog.css";

const Profil = (props) => {
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
  // const getdata = () => {
  //   console.log("hhhhhhhhhh", lborni);
  //   console.log(profil, "hani d5alt");
  //   lborni.push(profil);
  //   console.log(lborni, "lborni en person")
  //   console.log(cherche, "cherche")
  //  lborni.map((el)=>{
  //    console.log(el,cherche);
  //    if( el.email == cherche){
  //     settest(el)
  //    }
  //  })
  // };

const goRightDoDark =()=>{
    document.getElementById("mode").style.backgroundColor = "rgb(44, 0, 44)";
    document.getElementById("leftCircle").style.opacity = "0";
    document.getElementById("rightCircle").style.opacity = "1";
    console.log('done')
  }
  const goLeftDoLight = ()=> {
    document.getElementById("mode").style.backgroundColor = "rgb(161,211,255)";
    document.getElementById("leftCircle").style.opacity = "1";
    document.getElementById("rightCircle").style.opacity = "0";
  }
  return (
    <div>
      <div>
        <NavBar />
        <div className="container" id="mode">
          <div className="content">
            <div className="profilePhoto">
              <div className="image">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  alt="photo"
                />
              </div>
              <div className="name">
                <h1>{test.firstName + " " + test.lastName}</h1>
                <h4>Founder, MyFoundation</h4>
              </div>
            </div>

            <div className="followers">
              <div className="f1 f">
                <h2>21.3k</h2>
                <p>Followers</p>
              </div>
              <div className="f2 f">
                <h2>104</h2>
                <p>Following</p>
              </div>
              <div className="f3 f">
                <h2>42</h2>
                <p>Posts</p>
              </div>
            </div>
            <div className="options">
              <button
                type="button"
                className="btn blue"
                onclick={()=>goLeftDoLight}
              >
                Message
              </button>
              <button
                type="button"
                className="btn white"
                onclick={()=>goRightDoDark}
              >
                Follow
              </button>
            </div>
            <div className="media">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-youtube"></a>
              <a href="#" className="fa fa-instagram"></a>
            </div>
          </div>
        </div>
        <div id="theme">
          <div className="line" id="slide">
            <div id="leftCircle" onclick="goRightDoDark()"></div>
            <div id="rightCircle" onclick="goLeftDoLight()"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
