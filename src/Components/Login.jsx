import React, { useState } from "react";
import Footer from "./Footer";
import LoginHeader from "./LoginHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, changeData] = useState({

    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const readValue = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const submitValue = () => {
    console.log(data);
    axios.post("http://localhost:4000/login", data).then((response) => {
      if (response.data.status !== "success") {
        alert("invalid email and password...");
      } else {

        let userID = response.data.userID;
        let name=response.data.name
        console.log(userID);
        sessionStorage.setItem("userID",userID)
        sessionStorage.setItem("name",name)
      
        navigate("/createPost");
      }
    });
  };
  return (
    <>
      <LoginHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <h1>Login</h1>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="form-control"
                  placeholder="Enter email"
                  value={data.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={readValue}
                  id=""
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div> */}
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Login
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <p className="new-user text-right">
                  New user? <Link to="/registration">click here</Link>
                </p>
                {/* <p className="forgot-password text-right">
                  Forgot <Link to="#">password?</Link>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
