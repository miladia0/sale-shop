import React from "react";import logo from "../img/class4.png"
import logo1 from "../img/java.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'
 export default function Backgrond(){
    return(
        <div className="background">
        <div className="imgcontainer"> <img className="image1" src={logo}/></div> 
       <img className="img2" src={logo1}/>
       <h1 className="titel">دوره جاوا اسکریپت</h1>
       <div className="bundel">
        <div className="bunel1"></div>
        <div className="bundel2"></div>
       </div>
       <div className="titel2">
       <h4><FontAwesomeIcon icon={faGraduationCap}/>دانشجو:53</h4>
       

       <h4>:59 نفرظرفیت</h4>
       </div>
        </div>
    )
 }