import React, { useEffect, useState } from 'react'
import NavScrollExample from './navbar'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Experience() {
    const [data, setData] = useState([])
    const experience = "EXPERIENCE"
    const getData = async () => {
        await axios.get(`http://localhost:8000/blog/?category=${experience}`).then((res) =>{
            setData(res.data.data)
        }
     
        ).catch((error)=>{
            console.log("error",error);
        });
    }
    useEffect(() => {
        getData()
    }, [])

  return (
    
    <>
    <NavScrollExample></NavScrollExample>
    <div className='container py-3'>
                <div className='row gx-3'>
                    <h1 className='text-center'>EXPERIENCE</h1>
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
    </>
  )
}

export default Experience