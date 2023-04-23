import React from 'react';
import './Homepage.css';
import banner from '../assets/images/banner.jpg';

function Homepage () {
  return (
    <div>
        <span className="now">Now Hiring  :Looking for a job in Full Stack Development?</span><br />
        <div className="ph">
        <li><a href ="/">+91 487 2080 212</a></li>
        <li><a href="/">Leshore Business Park, Thrissur</a> </li>
        </div>
      <span className="head">WOXRO</span><br />
      <span className="head1">THINK BIG WE MAKE IT POSSIBLE</span><br />
      <img className="homeimag"src={banner} alt="" />
      <div  className="homenavbar">
        
      <div className="bar">
        <li><a href ="/">Home</a></li>
        <li><a href="/">About us</a> </li>
        <li><a href="/">Services</a> </li>
     
        <li><a href ="/" >Carreers</a></li>
        <li><a href ="/" >Blogs </a></li>
        <li><a href ="/" >Our works </a></li>
        <li><a href ="/" >Contact us </a></li>
       

      </div>

    

      
        <div className="text1">
          <span>Kerala Leading Web</span><br />
          <span>Design Company</span>
        </div>
       
        <div className="text2">
          <span>Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</span><br />
          
          
        </div>
</div>
    </div>
  );
}
export default Homepage;