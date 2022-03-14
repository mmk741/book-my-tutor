import React from 'react';
import './Home.css';
import img from '../../assets/images/toBeDeleted.jpg'
import { NavLink } from 'react-router-dom';
import CardComponent from '../../component/card/CardComponent';




function Home() {
  return (
<>
    <section  className='header  '>
    <div className='container-fluid  '>
  <div className='row '>
    <div className='col-10 mx-auto'>
    <div className='row'>
         <div className='col-md-6 pt-5  pt-lg-0 order-2 order-lg-1'>
             <h1>Tutor of your choice only at <strong className='brand-name'>ApnaTutor</strong></h1>
             <h2 className='my-3'>
                  Some other info here
             </h2>
             <div className='mt-3'>
                  <NavLink to='/contact' className='btn-custom'>Contact US</NavLink>
             </div>
         </div>

         <div className='col-lg-6  order-1 order-lg-2 header-img'>
         <img src={img} alt="home img" style={{width:'98%'}} />

         </div>

    </div>

<div className="row mt-5  " id='tutors'>
 
 <h2 id='tutors'>Our Team</h2>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   </div>
   
   
  
    </div>
  </div>
</div>
</section>

</>
  )
}

export default Home