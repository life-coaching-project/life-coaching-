import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import Feedback from "./feedback";
import "./index.css";
import $ from 'jquery'
const Main = () => {
  const navigate = useNavigate();
  const [servey, setservey] = useState([]);
  const [cout, setcout] = useState(0);
  const [next, setnext] = useState(0);
  const [elem, setelem] = useState(1);
  const elements = servey[elem];

  const [feedback, setfeedback] = useState([]);



  const resetRadioState = () => {
    setelem("");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/survey/getthequestion")
      .then(({ data }) => {
        console.log(data);
        setservey(data);
      })
      .then(() => console.log("====", servey))
      .catch((error) => console.log(error));
  }, []);
  // var elem = servey[cout];
  return (
    <div>
      <NavBar />
      {console.log("elem", elem)}
      <div>
        <div id="survey">
          {elem < 12 ? (
            // <div className={styles.main_container}>
            //   <div>
            //     <div>
            //       <h2>Life check survey</h2>
            //       <h1> {elements !== undefined && elements.question}</h1>{" "}
            //       <br></br>
            //       <input
            //         type="radio"
            //         value="male"
            //         checked={next === "male"}
            //         onClick={resetRadioState}
            //         onClick={() => setelem(elem + 1)}
            //       />
            //       {elements !== undefined && elements.option1}
            //       <br></br>
            //       <input
            //         type="radio"
            //         value="male"
            //         checked={next === "male"}
            //         onClick={resetRadioState}
            //         onClick={() => setelem(elem + 1)}
            //       />
            //       {elements !== undefined && elements.option2}
            //       <br></br>
            //       <input
            //         type="radio"
            //         value="male"
            //         checked={next === "male"}
            //         onClick={resetRadioState}
            //         onClick={() => setelem(elem + 1)}
            //       />
            //       {elements !== undefined && elements.option3}
            //       <br></br>
            //       <input
            //         type="radio"
            //         value="male"
            //         checked={next === "male"}
            //         onClick={resetRadioState}
            //         onClick={() => setelem(elem + 1)}
            //       />{" "}
            //       {elements !== undefined && elements.option4}
            //       <br></br>
            //       <div>
                    <div class="container m_t_2"> 
  <h1 class="text-black">Life check survey</h1>
  <div class="quiz">
    <div class="p_1"><progress max="8" value="0"></progress></div>
    <div class="progressData"><span class="current">{elem}</span> / <span class="limit">12</span></div>
    <div class="question card">
      <p class="questionText" onClick={() => setelem(elem + 1)}>{elements !== undefined && elements.question}</p>
      <div id='test'  onClick={() => setelem(elem + 1)}>{elements !== undefined && elements.option1}</div> 
      <div id='test'onClick={() => setelem(elem + 1)}>{elements !== undefined && elements.option2}</div> 
      <div id='test' onClick={() => setelem(elem + 1)}>{elements !== undefined && elements.option3}</div> 
      <div id='test'onClick={() => setelem(elem + 1)}>{elements !== undefined && elements.option4}</div> 
    </div> 
  </div> 
{/* </div> 
                 </div>
                </div>
              </div> */}
            </div> 
          ) : (
            <Feedback />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;


