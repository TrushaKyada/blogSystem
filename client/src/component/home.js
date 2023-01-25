import React, { useEffect, useState } from 'react'
import NavScrollExample from './navbar'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import 'react-multi-carousel/lib/styles.css';
import MultipleItems from './slider1';

function Home() {
        const [data, setData] = useState([])
        
        const getData = async () => {
            const res = await axios.get("http://localhost:8000/blog/view");
        
            console.log("res", res.data.data);
            setData(res.data.data)
            
        }
        useEffect(() => {
            getData()
        }, [])

  
  
 

    return (
        <>
            <NavScrollExample />
           
        
        <MultipleItems></MultipleItems>
       

           
            <div className='container py-3'>
                <div className='row gx-3'>
                    {
                        data.map((val) => {
                            return (<>
                                <div className='col-md-3 py-2'>
                                    <Card className='rounded-0 border-0'>
                                        <Card.Img variant="top" src={val.blogImage[0].res} className="img rounded-0"/>
                                        <Card.Body>
                                            <Card.Title>{val.blogCategory}</Card.Title>
                                            <Card.Text>
                                                {val.blogTitle}
                                            </Card.Text>
                                            <Card.Text>
                                                {val.blogDate}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>)
                        })
                    }

                </div>
            </div>
            <div className='container-fluid bg-light'>
                    <div className='row justify-content-between align-items-center py-2 px-5 mx-5'>
                        <div className='border-bottom py-5'>
                        <h2 className='text-center'>Subscribe Newsletter</h2>
                        <p className='text-center'>Subscribe my Newsletter for new blog posts , tips and info.</p>
                        <div className='d-flex justify-content-center subscribe'>
                            <div><input className='rounded-0 p-2 border-0 bg-white mx-3 s1' placeholder='Email Address'></input></div>
                            <div><button className='rounded-0 p-2 py-1 bg-dark text-white mx-1'>SUBSCRIBE</button></div>
                        </div>
                        </div>
                    </div>
                    <div className='row'>
                        <ul className='d-flex justify-content-center px-0 li f1'>
                            <li className='px-2 py-2 f1'>PRIVACY POLICY</li>
                            <li className='px-2 py-2'>SUPPORT</li>
                            <li className='px-2 py-2'>ABOUT</li>
                            <li className='px-2 py-2'>CONTACT</li>
                            <li className='px-2 py-2'>TERMS</li>
                            <li className='px-2 py-2'>CATEGORY</li>

                        </ul>
                    </div>
                    <div className='row justify-content-center pb-3'>
                        <h5 className='text-center'>@ copyright all reserved to themefisher.com-2019</h5>
                    </div>
            </div>
        </>
    )
}

export default Home