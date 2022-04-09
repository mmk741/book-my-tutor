import React,{useEffect,useState} from 'react'
import './FloatingButton.css'

function FloatingButton() {

  const [flag, setFlag] = useState(false)

  const listenScrollEvent = (event) => {
    if (window.scrollY > 600) {
       setFlag(()=>true)
       
    }
    else{
      setFlag(()=>false)
     } 
  }
  


  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
    <div className='floating' style={{display:flag===false?"none":""}} >
        <a href="#contactUs">Enroll Your Child Now</a>
        </div>

       
    </>
  )
}

export default FloatingButton