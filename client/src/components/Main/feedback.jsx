import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Feedback(props) {
  const [feedback, setfeedback] = useState([]);
  const [i, seti] = useState(1);
  const [thereply, setthereply] = feedback[i];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/survey/getthefeedback")
      .then(({ data }) => {
        console.log(data, "heeeeeyyy");
        setfeedback(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div> {thereply.thefeedback}</div>;
}

export default Feedback;
