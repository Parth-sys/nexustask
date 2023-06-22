import React  from "react";
import {BsArrowRightShort} from 'react-icons/bs'
function Five(){
    return(
        <div className="container f mt-8 ">
        <div className="row">
          <div className="d-flex">
            <div className="col-md-4">
              <h5 style={{fontSize:"15px"}}>For the Home</h5><br/>  
              <h3 style={{fontFamily:"arial" ,color:"#333"}}>Domestic Pleasures<br/> order</h3><br/>
              <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure</p>
              <p>See all home<BsArrowRightShort></BsArrowRightShort></p>
            </div>
        
            <div className="mt-1">
                <img src="https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png" style={{width:"300px"}}></img>
                   <a className="linkt" href="/">Parsley Seed Anti-Oxidant Skin Care Kit</a>
            </div>

            <div className="mt-1">
                <img src="https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png" style={{width:"400px"}}></img>
                   <a className="linkt" href="/">Ptolemy Aromatique Candle</a>
            </div>

            <div className="mt-1">
                <img src="https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png" style={{width:"400px"}}></img>
                   <a className="linkt" href="/"> Aganice Aromatique Candle</a>
            </div>


            <div className="mt-1">
                <img src="https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png" style={{width:"400px"}}></img>
                   <a className="linkt" href="/">Parsley Seed Anti-Oxidant facial cleanser</a>
            </div>


            </div>  

        </div>

        </div> 
    )
}

export default Five