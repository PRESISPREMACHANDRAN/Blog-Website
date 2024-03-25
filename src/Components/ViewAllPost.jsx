import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const ViewAllPost = () => {
  const [data, changeData] = useState({ data: [] });

  const fetchData = () => {
    axios.post("http://localhost:4000/viewAll").then(
      (response)=>{
        changeData(response.data)
      }
    )
  };

  useEffect(()=>{fetchData()},[])
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Post</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.data.map(
                    (value,index)=>{
return (
  <tr>
    <th scope="row">{index+1}</th>
    <td>{value.FirstName}</td>
    <td>{value.LastName}</td>
    <td>{value.title}</td>
    <td>{value.post}</td>
    <td>{value.tag}</td>
  </tr>
);
                    }
                  )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewAllPost;
