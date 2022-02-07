import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
import NavBar from "./NavBar";
import "./PostBlog.css";
import { storage } from "../../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// class PostBlogs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       title: "",
//       text: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     $.ajax({
//       url: "/PostBlogs",
//       success: (data) => {
//         this.setState({
//           items: data,
//         });
//       },
//       error: (err) => {
//         console.log("err", err);
//       },
//     });
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit() {
//     axios.post("/PostBlogs", this.state).then(({ data }) => {
//       console.log("blogs", data);
//     });
//   }

const PostBlogs = () => {
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
  }
  //   const file = e.target[0].files[0];

  // };
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  //const [progress, setProgress] = useState(0);
  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };
  // const handleUpload = () => {
  //   const UploadTask = storage.ref(`images/${image.name}`).put(image);
  //   UploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage.ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           console.log("im here", url);
  //         });
  //     }
  //   );
  // };
  // console.log("image", image);
  

  // const uploadFile = (file) => {
  //   if (!file) return;
  //   const storageRef = ref(storage, `/files/ ${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         console.log("hkjhkjllh", url);
  //       });
  //     }
  //   );
  // };

    
 const postData=()=>{
    axios.post('http://localhost:3000/api/PostBlogs', data).then(res=>{
     console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log('dataPost',data);
  };
  return (
    <div>
      <NavBar />
      <div className="create" id="post">
        <div className="create-editor">
          <h2>Create Blog</h2>
          <form>
            <input
              className="create-input"
              type="text"
              placeholder="Post Title"
              name="title"
              onChange={handleChange}
            ></input>
            <input
              className="create-input"
              type="text"
              name="text"
              placeholder="Author"
              onChange={handleChange}
            ></input>
            {/* <form onSubmit={()=>formHandler}>
              <input
                className="create-input"
                type="file"
                placeholder="Image URL"
              ></input>
              <button >Upload</button>
            </form> */}
            {/* <h3>uploaded {progress} %</h3> */}
            <input className="create-input" type='text' onChange={handleChange}/>
            <textarea
              className="create-body-textarea"
              placeholder="Post Body"
            ></textarea>
            <button className="create-submit-button" type="submit" onClick={postData}>
              Save post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostBlogs;
