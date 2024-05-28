import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

const ViewMyPost = () => {

  const [data,changeData]=useState({
    user_id:sessionStorage.getItem("userID"),
    token:sessionStorage.getItem("token"),
    
  })

  const [showData,changeShowData]=useState([])

  const fetchData = () => {
    axios.post(process.env.REACT_APP_BASEURL+"/viewMyPost",data).then(
      (response)=>{

        console.log(response.data)
        changeShowData(response.data.data)
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
                  <th scope="col">Title</th>
                  <th scope="col">Post</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
               {showData.map(
                (value,index)=>{
                  return  <tr>
                  <th scope="row">{index+1}</th>
                  <td>{value.title}</td>
                  <td>{value.post}</td>
                  <td>{value.tag}</td>
                </tr>
                
                }
               )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ViewMyPost