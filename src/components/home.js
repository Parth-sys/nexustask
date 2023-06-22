import React from "react";
import { BsPlus } from 'react-icons/bs'



function Navbar() {
  return (
    <>

      <div className="bg-dark p-2 ">
        <a href="https://www.aesop.com/hk/en/" className="link pr-1">Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on all orders.<span><button href="https://www.aesop.com/hk/en/" className="link " style={{ color: 'white' }}><BsPlus></BsPlus></button></span>  </a>
  </div>
      <nav className="navbar navbar-expand-lg p-3" style={{ backgroundColor: "#333" }} >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active " aria-current="page" href="https://www.aesop.com/hk/en/" style={{ color: "white" }} >Skin Care</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="https://www.aesop.com/hk/en/" style={{ color: "white" }} >Body & Hand</button>
              </li>
              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/" style={{ color: "white" }}>Hair</button>
              </li>
              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/"style={{ color: "white" }}>Fragrance</button>
              </li>
              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/" style={{ color: "white" }}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link "href="https://www.aesop.com/hk/en/" style={{ color: "white" }} >Kits& Travel</button>
              </li>

              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/"   style={{ color: "white" }}  >Gifts</button>
              </li>

              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/" style={{ color: "white" }}>Read</button>
              </li>
              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/"  style={{ color: "white" }}  >Stores</button>
              </li>

              <li className="nav-item">
                <button className="nav-link " href="https://www.aesop.com/hk/en/"   style={{ color: "white" }}>Facial Appointments</button>
              </li>

              <li className="nav-item">
                <button className="nav-link "  href="https://www.aesop.com/hk/en/" style={{ color: "white" }}></button>
              </li>

            </ul>



            <div className="d-flex "  >

              <div style={{ margin: "10px" }}>

                <button href="https://www.aesop.com/hk/en/" className="link">Log in</button>
              </div>
              <div style={{ margin: "10px" }}>
                <button href="https://www.aesop.com/hk/en/" className="link">cabinet</button>

              </div>

              <div style={{ margin: "10px" }}>

                <button href="https://www.aesop.com/hk/en/" className="link">cart</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar