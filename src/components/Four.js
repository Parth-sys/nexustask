import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function Four(){
   
   
    return(
    <div className="container mt-4 mb-4">
     <div className="row">
        <div className="d-flex">
         <div className="col-md-6">
            <h5>Post-Poo Drops has returned</h5>
         <p>Here to make the malodorous melodious once<br/> again. Dispense this favoured formulation into the<br/> toilet bowl after flushing to effectively mask<br/> disagreeable odours.</p>
         
         <button className=" fbt" > Read More <span><BsArrowRightShort/></span></button>
          
         
         </div>

            <div  className="m-1" >
              <img src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" alt="img"
              width="600px" height="300px"
              ></img>
            
                </div>

        </div>

     </div>
 </div>

    
   )

   }
   export default Four;