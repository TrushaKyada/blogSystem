import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NavScrollExample from './navbar';
function Blog() {
    var { id } = useParams();
    var token = localStorage.getItem('token');
    console.log("token",token);
    const [data, setData] = useState([]);
    const [udata, setUdata] = useState("");

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    const getData = async () => {


        await axios.get(`http://localhost:8000/blog/viewbyuser/${id}`, {headers}).then((res)=>{
            console.log("res", res.data.data);
            setData(res.data.data);
            setUdata(res.data.userData);
        }).catch((err) => {
            alert("error", err.response.data.message);
        });

    

    }
    
    console.log("data", data);
        useEffect(() => {

            getData();

        }, [])
    return (
        <>
            <NavScrollExample></NavScrollExample>
            <div className='container py-5 px-5'>
                <div className='row'>
                    <a className='text-center text-dark' href={`/addblog/${id}`}>ADD BLOG</a>
                </div>
                {data.map((val) => {
                    console.log("val", val);
                    return (
                        <>
                            <div className='row py-5 mr-0'>
                                <h6 className='text-center text-danger'>{val.blogCategory}</h6>
                                <h2 className='text-center text-dark py-2'>{val.blogTitle}</h2>
                                <p className='text-center'>BY {udata.firstname} {val.blogDate}</p>
                              <a href={`/blog/${val._id}`}><img src={val.blogImage[0].res} className="py-3"width="100%" height="90%"></img></a>  
                                <p className='py-3 word-wrap'>{val.blogDesc}</p>
                            </div>
                            <div className='row py-3 border-top border-bottom justify-content-between align-items-center'>
                                <div className='col-md-3'>
                                    <p className='mb-0'>{val.comment} comment</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='mb-0'>{val.blogLike} <i className="fa-regular fa-heart"></i> </p>
                                </div>
                                <div className='col-md-3'>
                                    <div className="d-flex justify-content-center">
                                        <div className='p-3 bg-light mx-1'><i class="fa-brands fa-twitter"></i></div>
                                        <div className='p-3 bg-light mx-1'><i class="fa-brands fa-facebook"></i></div>
                                        <div className='p-3 bg-light mx-1'><i class="fa-brands fa-linkedin"></i></div>
                                        <div className='p-3 bg-light mx-1'><i class="fa-brands fa-pinterest"></i></div>

                                    </div>
                                </div>
                            </div>
                           

                        </>
                    )


                })

                }


            </div>

        </>
    )
}

export default Blog