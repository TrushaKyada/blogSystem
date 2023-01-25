
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavScrollExample from './navbar';


function Bloguser() {

  var token = localStorage.getItem('token');
  console.log("token--------", token);
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const [data, setData] = useState("")
  const [profile, setProfile] = useState("")
  const [img, setImg] = useState([])
  const [blogimg, setBlogimg] = useState("")
  const [comment, setComment] = useState([])
  const [like,setLike] = useState("");
  var { id } = useParams()
  console.log("id", id);
  var id1 = localStorage.getItem("id");
  console.log("userid", id1);
  const getData = async () => {
    console.log("vsdvshbdjsb");
    // var media = document.getElementById('media');

    const res = await axios.get(`http://localhost:8000/blog/viewBlog/${id}`)
    const res1 = await axios.get(`http://localhost:8000/comment/view/${id}`).then(res1 => {
      setComment(res1.data.data)
    }).catch((e) => {
      console.log(e);
      // media.style.display = 'none';
    })

    setData(res.data.data)
    setProfile(res.data.userData)
    setBlogimg(res.data.data.blogImage[0])
    setImg(res.data.profile.profile[0])




  }
  console.log("data", comment);

  useEffect(() => {
    getData();

  }, [])
  const clickcmt = () => {
    const c1 = document.getElementById('c1');

    if (c1.style.display === 'none') {
      // 👇️ this SHOWS the c1
      c1.style.display = 'block';
    } else {
      // 👇️ this HIDES the c1
      c1.style.display = 'none';
    }
  }
  const [d, setD] = useState({
    comment: ""
  });

  const inputEvent = (e) => {
    const { name, value } = e.target
    setD({ ...d, [name]: value })

  }

  const submitComment = (e) => {
  

    e.preventDefault();
    
    
    axios.post(`http://localhost:8000/comment/add-comment/${id1}/${id}`, d, { headers })
      .then(res2 => {


        window.location = `/blog/${id}`
      }).catch((er) => {


        alert(er.response.data.message);
        window.location = `/blog/${id}`





      })

  }


  const addlike =async(e)=>{
    e.preventDefault();

    var token = localStorage.getItem("token");
    console.log("tokennnnnnttttttttttt", token);
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    console.log("headers", headers);
    await axios.get(`http://localhost:8000/blog/like/${id}`,{headers}).then(res =>{
      window.location = `/blog/${id}`
    }).catch((er) => {

console.log(er)
      alert(er.response.data.message);
      // window.location = `/blog/${id}`





    })

}
  return (
    <>

      <NavScrollExample></NavScrollExample>
      <div className='container-fluid py-5 px-3'>
        <div className='row justify-content-between'>
          <div className='col-md-7'>

            <h6 className='text-center text-danger'>{data.blogCategory}</h6>
            <h2 className='text-center text-dark'>{data.blogTitle}</h2>
            <p className='text-center py-2'>{data.blogDate}</p>
            <img src={blogimg.res} className="blog-img px-5"></img>
            <p className='py-5 px-5'>{data.blogDesc}</p>
            <div className='row justify-content-between align-items-center border-top border-bottom mx-5'>
              <div className='col-md-3 py-3'>{data.comment} <a href='#c1' className='text-dark a' onClick={() => { clickcmt() }}> comment <i class="fa-regular fa-comment-dots"></i></a></div>
              <div className='col-md-2 py-3'>{data.blogLike} <i className="fa-regular fa-heart" onClick={(e)=>{addlike(e)}}></i></div>

            </div>
            <div className='row mx-4 py-4' id='c1'>
              <form id="form" className='d-flex'>

                <textarea type="text" onChange={inputEvent} value={d.comment} name="comment" className='border-0 p-2 textcmt' cols="80" rows="1" placeholder='comment.....'></textarea><i class="fa fa-share size mt-3" aria-hidden="true" onClick={(e) => submitComment(e)}></i>
              </form>


            </div>
            <div className='row mx-5'>
              {
                comment.map((val) => {
                  return (
                    <div className="media d-flex p-5 ps-0" id="media">
                      <img className="me-5 img-media" width="10%" height="35%" src={val.profileimg} alt="Generic placeholder image"></img>
                      <div className="media-body ml-5">
                        <h5 className="mt-0">{val.username}</h5>
                        {val.comment}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-2 justify-content-center'>
            <img src={img.res} className="rounded-circle border" width="100%"></img>
            <h5 className='pt-4 ps-lg-4 ps-2 text-center'>{profile.firstname} {profile.lastname}</h5>
            <p className='ps-lg-4 ps-2 text-center'>{profile.username}</p>
            <p className='ps-lg-4 ps-2 text-center w-100'>{profile.userDesc}</p>

          </div>
          <div className='col-md-2'></div>

        </div>

      </div>
      <div className='container py-3'>
        <div className='row justify-content-between'>
          <div className='col-md-7'>

          </div>
          <div className='col-md-5'>
            <div className="d-flex justify-content-center">
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-twitter"></i></div>
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-facebook"></i></div>
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-linkedin"></i></div>
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-pinterest"></i></div>
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-youtube"></i></div>
              <div className='p-3 bg-light mx-1'><i class="fa-brands fa-instagram"></i></div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Bloguser