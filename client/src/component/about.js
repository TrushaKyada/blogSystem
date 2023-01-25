import React from 'react'
import NavScrollExample from './navbar'

function About() {
    return (
        <>
            <NavScrollExample></NavScrollExample>
            <div className='container py-5'>
                <div className='row'>
                    <h2 className='text-center py-4'>About Me</h2>
                    <img src='images/about.jpg' width="100%"></img>

                </div>
                <div className='row py-5'>
                    <div className='col-md-4'>
                        <h6 className='pb-3'>WHO IS ME?</h6>
                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat</p>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='pb-3'>MY VISSION</h6>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis biben. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='pb-3 px-3'>FOLLOW ME :</h6>
                        <div className="d-flex flex">
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
            <div className='container-fluid'>
                <div className='row pt-2'>
                    <div className="d-flex justify-content-center">
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-twitter"></i></div>
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-facebook"></i></div>
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-linkedin"></i></div>
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-pinterest"></i></div>
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-youtube"></i></div>
                        <div className='p-3 px-3 mx-lg-5 mx-1'><i class="text-ceter text-light1 fa-brands fa-instagram"></i></div>
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

export default About