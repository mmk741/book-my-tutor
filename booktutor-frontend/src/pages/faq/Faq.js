import React from 'react'
import CardComponent from '../../component/card/CardComponent'

function Faq() {
  return (
    <>
        <section class=" p-5" id='faq'>
                   <h2 >FAQ</h2>
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

export default Faq