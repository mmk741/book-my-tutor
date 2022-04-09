import React from 'react'
import CardComponent from '../../component/card/CardComponent'

function ParentTestimonials() {
  return (
    <>
        <section class=" p-5  " id='parentTestimonials'>
                   <h2 >Parent Testimonials</h2>
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

export default ParentTestimonials