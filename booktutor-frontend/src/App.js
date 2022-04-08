import Header from "./pages/layout/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./pages/contactUs/ContactUs";
import { Route , Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./pages/layout/footer/Footer";



function App() {
  return (
    <div >
     
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    {/* <Footer/> */}
     
    </div>
  );
}

export default App;
