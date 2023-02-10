import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faUser} from '@fortawesome/free-solid-svg-icons'


 export default function Navbar(){
    return(
      
        <nav>
   
         <ul className="navebar">
            <li><FontAwesomeIcon icon={faUser}/>ثبت  نام</li>
            <li>ورود</li>
            <li> در باره  ما </li>
            <li> خدمات </li>
            <li> مقالات</li>
            <li>دورها</li>
            
            <li> <FontAwesomeIcon icon={faPen}/>بامبو </li>
            
         </ul>
         </nav>
    )
 }