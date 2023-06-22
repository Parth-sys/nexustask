import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { BsArrowRightShort } from "react-icons/bs";
function Seven(){


   const images=[
    {
        url:"https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
    },
    {
        url:"https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg"
    },
    {
        url:"https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"
    }
   ]


    return(
        <div className="container mt-8 mb-4">
        <div className="row">
           <div className="d-flex">
            <div className="col-md-6">
               <h3>Store Locator</h3>
            <p>Our consultants are available to host you in<br/>-store and provide tailored guidance on gift purchases. </p>
            
            <button className=" fbt" > Find a nearby store<span><BsArrowRightShort/></span></button>
             
            
            </div>
   
               <div  className="m-1" >
                
               <SimpleImageSlider
                width={500}
                height={250}
                images={images}
                showNavs={true}
               
               >

               </SimpleImageSlider>
                   </div>
   
           </div>
   
        </div>
    </div> 
    )
}
export default Seven