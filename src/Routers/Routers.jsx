import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Home from"./components/Home";
import About from"./components/About";
import Contact from"./components/Contact";
import Footer from"./components/Footer";
import BookingForm from '../components/BookingForm';
import Modal from '../components/Modal';


function Routers() {
  return (

    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
         <Route path='/about' element={<About />} />
          <Route path="/booking" element={<BookingForm />} />
        <Route path="/cars/:carName" element={<CarDetails />} />
            <Route path='/footer' element={<Footer />} />
             <Route path='/blogs/:slug' element={<BlogDetails />} />
             <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
              
    </Routes>
 
    // <div>
      
    // <Router>
    //      <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //          <Route path="/about" element={<Contact />} />
    //         {/* Other routes */}
    //       </Routes>
    //     </Router>
    // </div>
  )
}

export default Routers
