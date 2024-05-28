import React, { useState } from "react";
import Footer from "./Footer";
import LoginHeader from "./LoginHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [data, changeData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword:""
  });
const navigate=useNavigate()


  const readValue = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const submitValue = () => {
    if (data.confirmPassword==data.password) {
      console.log(data);
      axios.post(process.env.REACT_APP_BASEURL+"/register", data).then((response) => {
        if (response.data.status !== "success") {
          alert(response.data.status);
        } else {
          alert("successfully registered.Please login again...");
          navigate("/");
        }
      });
    } else {
      alert("password and confirm password doesn't match!")
    }
  };


  return (
    <>
      <LoginHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <h1>Registration</h1>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="FirstName"
                  value={data.FirstName}
                  onChange={readValue}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="LastName"
                  value={data.LastName}
                  onChange={readValue}
                  placeholder="Enter Second Name"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={readValue}
                  placeholder="Enter Email"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  className="form-control"
                  name="password"
                  value={data.password}
                  onChange={readValue}
                  placeholder="Enter Password"
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id=""
                  className="form-control"
                  placeholder="Re-Enter Password"
                  value={data.confirmPassword}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Register
                </button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <p className="already registered text-right">
                  Already registered <Link to="/">sign in?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
