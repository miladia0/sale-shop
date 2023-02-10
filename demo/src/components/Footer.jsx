import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer >
            
            <div>
                 <h3 dir="rtl">خبر نامه </h3>
                 <div className="submit">
                 <input type="email"  placeholder="ایمیل  شما " />
            <button> عضویت</button>
            </div>
            </div>
            <div>
            <h1 dir="rtl">درباه بامبو</h1>
            <p className="about" dir="rtl">
                 بامبو یکی  از  پر  تلاش  تیرن  و  به  روز  ترین  وب  سایت های  اموزشی  در  سطح ایران  است   که 
                  میشه  تلاش  کرده  تا  بتواند 
                   جدید  ترین   و  به  روز  ترین  مقالات 
                    د دوره  های  امزسی  را  در  اختیار   کاربران  ایرانی قرار دهد  </p>
                 </div>
           
        </footer>
    )
}