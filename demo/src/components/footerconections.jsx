import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook,faInstagram ,faWhatsapp,faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Conections (){
    return(
        <div className="footerecend">
            <div  className="fotercontainer">
        <h1 dir="rtl">راهای  ارتباط با ما  </h1>
        <p className="about" dir="rtl">
            Lorem ipsum dolor sit amet.@gmail.com</p>
            Lorem ipsum dolor sit amet.@gmail.com 
           <a href="https://webprog.io/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D9%88%D8%AA-%D8%A7%D8%B3%D8%AA%D8%B1%D9%BE-5-Bootstrap-%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D9%85%D8%AD%D9%88%D8%B1/episode/4"><FontAwesomeIcon icon={faFacebook}/></a> 
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faWhatsapp}/>
            <FontAwesomeIcon icon={faYoutube}/>
            </div >
            
          
            
            <div className="fotercontainer" >
                <h1>
                    همراه  ما باشید 

                </h1>
                <p>سوال رایج </p>
                    <p>قوانین</p>
                    <p>خدمات</p>
            </div>
             </div>
    )
}