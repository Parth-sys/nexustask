import React from "react";
 import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


function Footer(){

    return(
        <>
        <footer className="bg-dark text-center text-white">
 
  <div className="container p-4">
    
    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        > <i ><BsFacebook></BsFacebook></i>
      </a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i ><BsTwitter></BsTwitter></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i > <BsInstagram></BsInstagram></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i ><BsLinkedin></BsLinkedin></i
      ></a>

      
    </section>
  

    
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
    
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
       

          
          <div className="col-md-5 col-12">
            
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          
          <div className="col-auto">
            
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        
        </div>
       
      </form>
    </section>
   
    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
   

    
    <section className="">
      
      <div className="row">
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">orders</a>
            </li>
            <li>
              <a href="#!" className="text-white">Stores</a>
            </li>
            <li>
              <a href="#!" className="text-white">Products</a>
            </li>
            <li>
              <a href="#!" className="text-white">Share</a>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Learn</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">About</a>
            </li>
            <li>
              <a href="#!" className="text-white">Services</a>
            </li>
            <li>
              <a href="#!" className="text-white">Locations</a>
            </li>
            <li>
              <a href="#!" className="text-white">shipping</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">our story</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Foundation</a>
            </li>
            <li>
              <a href="#!" className="text-white">Careers</a>
            </li>
            <li>
              <a href="#!" className="text-white">Instagram</a>
            </li>
            <li>
              <a href="#!" className="text-white">Images</a>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Twitter</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Story</a>
            </li>
            <li>
              <a href="#!" className="text-white">Message us</a>
            </li>
            <li>
              <a href="#!" className="text-white">Complaint us</a>
            </li>
            <li>
              <a href="#!" className="text-white">Review us</a>
            </li>
          </ul>
        </div>
        
      </div>
     
    </section>
   
  </div>
 
  <div className="text-center p-3" style={{backgroundColor: "gray"}}>
    © Aesop:
    <a className="text-white" href="www.aesop.com">www.aesop.com]</a>
  </div>
 
</footer>
</>


    )
}
export default Footer;