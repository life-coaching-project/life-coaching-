import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
function Feedback(props) {
  const [feedback, setfeedback] = useState([]);
  const [i, seti] = useState(1);
  // const [thereply, setthereply] = feedback[i];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/survey/getthefeedback")
      .then(({ data }) => {
        console.log(data, "heeeeeyyy");
        setfeedback(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="finalFeedback">
      thank you for filling our survey seriously; it appears to us after
      carefully reviewing your answers that more attentivness is needed for the
      emotional aspect of your life which is why due to our review more
      emotional life articles will be at your feed disposal and in time your
      life will get everything in place , we care for you .{" "}
    </div>
  );
}

export default Feedback;
