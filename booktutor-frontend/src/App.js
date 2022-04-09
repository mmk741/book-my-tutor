import Header from "./pages/layout/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./pages/contactUs/ContactUs";
import { Route , Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./pages/layout/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import BecomeTutor from "./pages/becomeTutor/BecomeTutor";
import Faq from "./pages/faq/Faq";
import FindTutor from "./pages/findTutor/FindTutor";
import ParentTestimonials from "./pages/parentTestimonials/ParentTestimonials";
import FloatingButton from "./component/floatingButton/FloatingButton";




function App() {
  return (
    <div >
     
     <Header/>
     <Home/>
     <AboutUs/>
     <BecomeTutor/>
     <Faq/>
     <FindTutor/>
     <ParentTestimonials/>
     <FloatingButton/>
    <Footer/>
     

    
    </div>
  );
}

export default App;
