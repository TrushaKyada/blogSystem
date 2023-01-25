import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Slider from "react-slick";
import '../'
export default function MultipleItems() {
 

  const [data, setData] = useState([])

  const getData = async () => {
      const res = await axios.get("http://localhost:8000/blog/view/top")
      console.log("res", res.data.data);
      setData(res.data.data)

  }
  useEffect(() => {
      getData()
  }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    return (
      <div className='container px-0 '>
       
        <Slider {...settings} className="px-0">
    
          {data.map((val)=>{
              return(
                <>
            
            <a href={`blog/${val._id}`} className='a1'>
            <div>
              <img src={val.blogImage[0].res} className="slideImg"></img>
              <div className='px-4 a1'>
              <div className='d-flex flex-column bg-white box px-lg-4 py-1'>
                <h5 className='text-center'>{val.blogCategory}</h5>
                <p className='text-center'>{val.blogTitle}</p>
                <h5 className='text-center'>{val.blogDate}</h5>
              </div>
              </div>
            </div>
            </a>
       
                </>
              )
          })}
        </Slider>
      </div>
    );
  
}
