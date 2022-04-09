import React from 'react';
import './Home.css';
import img from '../../assets/images/toBeDeleted.jpg'
import testImg from '../../assets/images/header-image.png'
import { NavLink } from 'react-router-dom';
import CardComponent from '../../component/card/CardComponent';
import ContactUs from '../contactUs/ContactUs';




function Home() {
  return (
<>
<section className="header-section d-flex align-items-center" id='home'>
        <div className="container" >
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="header-details">
                        <h6>Are you ready to Learn?</h6>
                        <h1>Study with a  <br/>  <span>Tutor-cum-Buddy</span></h1>
                        <h5>One stop solution for Personalized Learning</h5>
                        {/* <button className="get-btn">Get Started</button> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 ml-auto">
                    <div className="header-image">
                        <img src={testImg} alt="" className="img-fluid"/>
                    </div>
                </div>

            </div>
        </div>

       
    </section>
    <div className='form' id='contactUs'>
     <ContactUs/>
 </div>  
   

</>
  )
}

export default Home