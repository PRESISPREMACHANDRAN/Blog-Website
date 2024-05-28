import React, {  useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";


const CreatePost = () => {
  const [data, changeData] = useState({
    user_id: sessionStorage.getItem("userID"),
    token: sessionStorage.getItem("token"),
    title: "",
    post: "",
    tag: "",
  });


  const readValue = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value });
  };

  const submitValue = () => {
    console.log(data);
    axios.post(process.env.REACT_APP_BASEURL+"/createPost", data).then((response) => {
      if (response.data.status === "success") {
        alert("successfully added");
      } else {
        alert("error");
      }
    });
  };

  let name=sessionStorage.getItem("name")
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <h1>Welcome {name}...</h1>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  TITLE
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={data.title}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  POST
                  {/* body */}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="post"
                  value={data.post}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  TAGS
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tag"
                  value={data.tag}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreatePost;
