import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faChalkboardTeacher,faStar} from '@fortawesome/free-solid-svg-icons'
import Backgrond from "./background";
export default function Classinfo(){
    return(
    <section className="info-container">
        <div className="info">
            <h4><FontAwesomeIcon icon={faChalkboardTeacher}/>مدرس</h4>
            <p>دکتر بحر العلومی </p>
        </div>
        <div className="info">
            <h4>تاریخ شروع دوره :1400/01/01</h4>
            <h4>تاریخ پایان دوره :1400/01/01</h4>
        </div>
        <div className="info">رتبه<FontAwesomeIcon icon={faThumbsUp}/>
            <h1 id="star"><FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            
            </h1>
        </div>
    </section>
    )
}