import React from "react";
import {BsArrowRightShort} from 'react-icons/bs'

function Video(){
    return(
        <div className="container" style={{marginTop:"100px"}}>
            <div className="row">
           <div className="d-flex">

            <div className="col-md-6 ">
              
                <div  className="m-1">

            <video  width="620" height="540" autoPlay>
                <source src="https://videos.ctfassets.net/u1nb1km7t5q7/4ca6T0U5D55iXM6mEBl5ZL/eb2c3b8ff8ea750ca33a2dcf6a1b83c3/the-athenaeum-anti-oxidants-video-block.mp4" ></source>
                </video>
            
                </div>

            </div>
            
            <div className="col-md-4 " style={{marginLeft:"100px",marginTop:"90px" }} >
             < div>
                <h6>The Athenaeum</h6>
             </div>
             <div>
                <h4>Lessons from the lab</h4>
             </div>

             <div>
                <p>In this instalment of our ‘Under the Microscope’ series: a focus on anti-oxidant-rich skin care and<br/> its benefits to city-dwellers.</p>
             </div>
          
             <button className="btn  fbt" > Read More <span><BsArrowRightShort/></span></button>
          
            </div>



           </div>




            </div>



        </div>
    )
}
export default Video