import React from 'react'
import CardComponent from '../../component/card/CardComponent'
import './AboutUS.css'

function AboutUs() {
  return (
    <>
       <section class="mt-5 p-5" id='aboutUs'>
                   <h2 >About Us</h2>
                   <div className="d-flex flex-wrap align-items-center">
                   <div className="p-4">
                    <CardComponent/>
                    </div>
                
                    <div className="p-4">
                    <CardComponent/>
                    </div>

                    <div className="p-4">
                    <CardComponent/>
                    </div>
                    </div>
                
       
    </section>
    </>
  )
}

export default AboutUs