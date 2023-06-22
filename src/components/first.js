import React from "react";
import {BsArrowRightShort} from 'react-icons/bs'

function First(){
    return(
        <div className="container">
        <div className="row ">
            <div className="d-flex">

           <div className="col-md-6">

           <div  className="mt-4" style={{display:"flex" ,flexDirection:"row"}}>
           <div >
           <img src="https://1000logos.net/wp-content/uploads/2020/10/Aesop-logo-500x300.png" alt="img" style={{width:"180px"}}></img> 
           </div>
           
           <div className="mt-5 ml-5 ">
            <h6 className="p-2">Supporting city skin</h6>
              <h2 className="p-3">Parsley Seed Anti-Oxidant Intense Serum</h2>
             <p>Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.</p>


              <button className="btn  fbt" > Discover the formulation <span><BsArrowRightShort/></span></button>
 
           </div>

           </div>


              </div>

              
              <div className="col-md-6 mb-1"  >
            <div className="">
           <img src="https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg" alt="img" style={{width:"700px",height:"600px"}}></img>     
            </div>
              </div>

           </div>
          

            </div>
        
        </div>
    )
}
export default First;