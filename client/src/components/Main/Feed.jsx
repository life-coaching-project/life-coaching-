import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import articles from "../articles";
import axios from "axios";
import moment from "moment";
const Feed = () => {
  const [data, setData] = useState(articles);
  // console.log("f5", data);
  // const hundelApi = async () => {
  //   try {
  //     const url = "http://localhost:3000/api/auth";
  //     await axios.post(url, data).then((response) => {
  //       if (
  //         response.data === "Invalid Password" ||
  //         response.data === "Invalid Email or Password"
  //       ) {
  //         alert("Invalid Password");
  //         navigate("/");
  //       } else if (response.data === "logged in successfully")
  //         navigate("/login");
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/api/PostBlogs"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        {data.map((el, index) => (
          <div>
            <ul key={index}>
              <li className="feed-list-item">
                <div className="feed-list-item-title">{el.title}</div>
                <div>
                  <img className="feed-list-item-image" src={el.Image} />
                </div>
                <div className="feed-list-item-byline">
                  <span className="feed-list-item-byline-author">
                    {el.text}
                  </span>
                  <br />
                  {moment(el.createdAt, "YYYYMMDD").from()}
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
