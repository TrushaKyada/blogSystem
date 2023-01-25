import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import NavScrollExample from './navbar'

function Contact() {
    const [data, setData] = useState({
        email:"",
        name:"",
        message:""
    });
    const contact =(e)=>{
        axios.post("http://localhost:8000/contact",data).then((res)=>{
            console.log("res", res.data.data);
            window.location = "/contact"
        }).catch((error)=>{
            console.log(error)
        });
    }
    const inputEvent = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    
      }
    return (<>
        <NavScrollExample></NavScrollExample>
        <div className='container py-5'>
            <div className='row'>
                <h2 className='text-center py-4'>Contact</h2>
                <img src='images/contact.jpg' width="100%"></img>

            </div>
            <div className='row py-5'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <p className='text-left'>Something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.</p>
                </div>
                <div className='col-md-1'></div>

            </div>
            <div className='row py-0'>
                <div className='col-md-1'></div>
                <div className='col-md-10'><h1>Get In Touch</h1></div>
                <div className='col-md-1'></div>
            </div>
            <div className='row py-0'>
                <div className='col-md-1'></div>
                <div className='col-md-10 d-flex flex-column'>
                    <p>Your Name (required)</p>
                    <input type="text" className='p-2' onChange={inputEvent} name='name' value={data.name}></input>
                    <p>Your Email (required)</p>
                    <input type="text" className='p-2' onChange={inputEvent} name='email' value={data.email}></input>
                    <p>Your Message</p>
                    <textarea rows={2} cols={3} className='my-2' onChange={inputEvent} name='message' value={data.message}></textarea>
                    <button className='px-3 py-2 mt-3 bg-danger border-0 text-white btn1' onClick={(e)=>{contact(e)}}>SEND MESSAGE</button>
                </div>
                <div className='col-md-1'></div>
            </div>

        </div>
        <div className='container-fluid'>
            <div className='row pt-2'>
                <div className="d-flex justify-content-center">
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-twitter"></i></div>
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-facebook"></i></div>
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-linkedin"></i></div>
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-pinterest"></i></div>
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-youtube"></i></div>
                    <div className='p-3 px-3 mx-lg-5 mx-2'><i class="text-ceter text-light1 fa-brands fa-instagram"></i></div>
                </div>
            </div>
            <div className='row bg-dark px-5 pt-4'>
                <div className='border-top p-3'>
                    <h6 className='text-center text-white'>© Copyright 2019 - Revolve. All Rights Reserved.</h6>
                </div>
            </div>
        </div>
    </>


    )
}

export default Contact