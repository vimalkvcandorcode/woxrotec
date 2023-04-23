import React from 'react';
import pc from '../../src/assets/images/pc.png';
import web from '../../src/assets/images/web.png';
import mob from '../../src/assets/images/mob.png';
import eco from '../../src/assets/images/eco.png';
import dig from '../../src/assets/images/dig.png';
import graph from '../../src/assets/images/graph.png';
import "./welcome.css"
function Welcome() {
  return (
   
      
    <div className ='trav1'>
     <span >SERVICES WE DELIVER </span>
     <div className='trav2'>
     <span > Preparing for your success, we provide truly prominent IT solutions.</span>
     </div>
     
     <div className='trav2'>
     <img className="home"src={pc} alt="" />
     <span > Web Designing</span><br></br>
     </div>
     <div className='travi'>
     <span >We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements. </span>
     </div>
     <div className='trav2'>
     <img className="home"src={web} alt="" />
     <span > Web Application</span><br></br>
     </div>
     <div className='travi'>
     <span >We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.. </span>
     </div>
     <div className='trav2'>
     <img className="home"src={mob} alt="" />
     <span > Mobile App Development</span><br></br>
     </div>
     <div className='travi'>
     <span >We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions. </span>
     </div>
     <div className='trav2'>
     <img className="home"src={eco} alt="" />
     <span > Ecommerce Development</span><br></br>
     </div>
     <div className='travi'>
     <span >For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start. </span>
     </div>
     <div className='trav2'>
     <img className="home"src={dig} alt="" />
     <span > Digital Marketing</span><br></br>
     </div>
     <div className='travi'>
     <span >We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.. </span>
     </div>
     <div className='trav2'>
     <img className="home"src={graph} alt="" />
     <span > Graphic Designing</span><br></br>
     </div>
     <div className='travi'>
     <span >For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start. </span>
     </div>
     <div className='trav3'>
      <span>We offer all kinds of IT services that ensure your success</span>
      </div>
      <button className="contact-button">
       Contact Us
     </button>
     <button className="letustalk">
      Let's Talk
     </button>
  
    </div>
     

  )
}

export default Welcome;