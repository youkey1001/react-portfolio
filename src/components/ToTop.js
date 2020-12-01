import React from 'react';
import IconTop from '../img/icon_totop.gif'
import '../css/ToTop.css';

const ToTop = () => {
   return (
       <p className="toTop">
           <a href="#top">
               <img src={IconTop} alt="" />
           </a>
       </p>
   ) 
}

export default ToTop;