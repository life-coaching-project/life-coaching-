
import React from 'react'
import axios from 'axios'
import $ from 'jquery'
import NavBar from './NavBar'
class PostBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: "",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    $.ajax({
      url: "/PostBlogs",
      success: (data) => {
        this.setState({
          items: data,
        });
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }



  render() {
    return (
      <div>
        <NavBar />
        <div className="create" id='post'>
          <div className="create-editor">
            <h2>Create Blog</h2>
            <form>
              <input
                className="create-input"
                type="text"
                placeholder="Post Title"
              ></input>
              <input
                className="create-input"
                type="text"
                placeholder="Author"
              ></input>
              <input
                className="create-input"
                type="text"
                placeholder="Image URL"
              ></input>
              <textarea
                className="create-body-textarea"
                placeholder="Post Body"
              ></textarea>
              <button className="create-submit-button" type="submit">
                Save post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostBlogs;
