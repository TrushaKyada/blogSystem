import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Registration = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    mobile: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    password: ""
  });
  const [userdata, setUserdata] = useState("")
  const [file, setFile] = useState("")

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  function handleSubmit(event) {
    event.preventDefault()
   
    const url = `http://localhost:8000/profile/${userdata._id}`;
    const formData = new FormData();
    // formData.append('profile', file);
    formData.append('profile', file.name);


    axios.post(url, formData).then((response) => {
      console.log("response",response);
      window.location = "/login"
    }).catch((error) => {
      console.log("error",error);

    })

  }
  const inputEvent = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

  }
  const onSubmits = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/user/registration", data).then(res => {
      console.log("....", res.data.data)
      setUserdata(res.data.data)
      console.log("fhbnvhgjg",userdata);

      alert(res.data.message)


    }).catch((er) => {
      alert(er.response.data.msg);
      window.location = "/login"
    })
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-5 pt-0 ml-auto">



        <div className="col-md-6 d-flex flex-column">
          <form onSubmit={(e) => onSubmits(e)}>
            <h1 className="text-left input1 py-4">Registration</h1>


            <input type="text" className="px-5 my-2 input1" placeholder='enter your fname' onChange={inputEvent} value={data.fname} name="fname" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your lname' onChange={inputEvent} value={data.lname} name="lname" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your uname' onChange={inputEvent} value={data.uname} name="uname" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your email' onChange={inputEvent} value={data.email} name="email" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your gender' onChange={inputEvent} value={data.gender} name="gender" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your city' onChange={inputEvent} value={data.city} name="city" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your state' onChange={inputEvent} value={data.state} name="state" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your country' onChange={inputEvent} value={data.country} name="country" />
            <input type="password" className="px-5 my-2 input1" placeholder='enter your password' onChange={inputEvent} value={data.password} name="password" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your mobile' onChange={inputEvent} value={data.mobile} name="mobile" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter your zipcode' onChange={inputEvent} value={data.zipcode} name="zipcode" />
            <textarea type="text" className="px-5 my-2 input1" placeholder='enter your description' onChange={inputEvent} value={data.description} name="description"></textarea>
            <button type="submit" className="px-5 py-2 btn btn-danger text-white">submit</button>

          </form>
          <form onSubmit={handleSubmit} className="pt-3">

            <input type="file" onChange={handleChange} name='profile' />
            <button type="submit">Upload</button>
          </form>
        </div>

        <div className="col-md-6 mt-5 pt-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="mt-5 pt-5" width="100%"></img>
        </div>
      </div>
    </div>
  );
}
export default Registration;