import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Six(){
    return(
        <div className="container" style={{marginTop:"150px" ,marginBottom:"100px"}}>
            <div className="row">
           <div className="d-flex">

            <div className="col-md-6 ">
              
                <div  className="m-1" >
              <img src="https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg" alt="img"
              width="600px" height="300px"
              ></img>
            
                </div>

            </div>
            
            <div className="col-md-4 " style={{marginLeft:"100px",marginTop:"90px" }} >
             < div>
                <h6>Tokens of appreciation</h6>
             </div>
             <div>
                <h3>Corporate gifts</h3>
             </div>

             <div>
                <p>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.</p>
             </div>
          
             <button className="btn  fbt" > Learn More about this service <span><BsArrowRightShort/></span></button>
          
            </div>



           </div>




            </div>



        </div>
    )
}
export default Six