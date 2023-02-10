import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faMedal,faBrain} from '@fortawesome/free-solid-svg-icons'
export default function Mazaya(){
    return(
       
        <section className="mazaya">
            <div>
             <h1 className="mazaya-head" dir="rtl" >مزایای دوره</h1>
             <ul dir="rtl">
                <li><FontAwesomeIcon icon={faBook}/>  اشنایی با  زبان 
                 برنامه  نویسی  جاوا  اسکریپت <p> در  پایان این  دره اموزشی  شما  دان
                    شوی  گرامی قادر به  د
                    رک  مفاهیم  عمیقی  نسبت  به ای زبان برنامه  نویسی  هستین  </p></ li>
                <li><FontAwesomeIcon icon={faMedal}/> اشنایی با  زبان 
                 برنامه  نویسی  جاوا  اسکریپت <p> در  پایان این  دره اموزشی  شما  دان
                    شوی  گرامی قادر به  د
                    رک  مفاهیم  عمیقی  نسبت  به ای زبان برنامه  نویسی  هستین  </p></li>
                <li><FontAwesomeIcon icon={faBrain}/> اشنایی با  زبان 
                 برنامه  نویسی  جاوا  اسکریپت <p> در  پایان این  دره اموزشی  شما  دان
                    شوی  گرامی قادر به  د
                    رک  مفاهیم  عمیقی  نسبت  به ای زبان برنامه  نویسی  هستین  </p></li>
             </ul>
             </div>
           <div className="mazayimg">

           </div>
        </section>
    )
}