import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Addblog() {
  var token = localStorage.getItem("token")
  const [data, setData] = useState({
    title: "",
    desc: "",
    blogCategory: ""
  });
  const [blog, setBlog] = useState("")

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
 
  function handleSubmit(event) {
    event.preventDefault()
    const url = `http://localhost:8000/blog/img/add-blog/${blog._id}`;
    const formData = new FormData();
    formData.append('blogimg', file);
    formData.append('blogimg', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `${token}`
      },
    };
    axios.post(url, formData, config).then((response) => {
      
      window.location="/";
    }).catch((error) => {
      alert(error.response.data.message);
    
    })

  }

  const inputEvent = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

  }
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  var { id } = useParams();
  const onSubmits = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/blog/add-blog/${id}`, data, { headers }).then(res => {
      setBlog(res.data.data);
      alert("please...!!upload your blog Image");
    }).catch((er) => {
      alert(er.response.data.message);

    })
  }

  
  return (
    <div className="container-fluid pt-5 mt-5">
      <div className="row justify-content-center p-5 pt-0 ml-auto">



        <div className="col-md-6 d-flex flex-column">
          <form onSubmit={(e) => onSubmits(e)}>
            <h1 className="text-left input1 py-4">Add Blog</h1>


            <input type="text" className="px-5 my-2 input1" placeholder='enter Blog title' onChange={inputEvent} value={data.title} name="title" />
            <input type="text" className="px-5 my-2 input1" placeholder='enter Blog Category' onChange={inputEvent} value={data.lname} name="blogCategory" />
            <textarea type="text" className="px-5 my-2 input1" placeholder='enter your description' onChange={inputEvent} value={data.desc} name="desc"></textarea>

            <button type="submit" className="px-5 py-2 btn btn-danger text-white">submit</button>

          </form>

        </div>

        <div className="col-md-6 mt-5 pt-5 mt-5">

          {/* uplod img */}
      <form onSubmit={handleSubmit} className="pt-3">
        
          <input type="file" onChange={handleChange} name='blogimg'/>
          <button type="submit">Upload</button>
        </form>

        </div>

        <center>

        </center>

      </div>
    </div>
  );
}

export default Addblog