import React from 'react'
import CardComponent from '../../component/card/CardComponent'

function FindTutor() {
  return (
    <>
        <section class=" p-5 " id='findTutor'>
                   <h2 >Find Tutor</h2>
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

export default FindTutor