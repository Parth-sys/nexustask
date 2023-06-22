import React from "react";
import { BsPlus } from 'react-icons/bs'



function Navbar() {
  return (
    <>

      <div className="bg-dark p-2 ">
        <a href=" _blank"sName="link pr-1">Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on all orders.<span><a href=" _blank"sName="link " style={{ color: 'white' }}><BsPlus></BsPlus></a></span>  </a>
      </div>
      <nav className="navbar navbar-expand-lg p-3" style={{ backgroundColor: "#333" }} >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href=" _blank"e={{ color: "white" }} >Skin Care</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" _blank"e={{ color: "white" }} >Body & Hand</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>Hair</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>Fragrance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }} >Kits& Travel</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}  >Gifts</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>Read</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}  >Stores</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}>Facial Appointments</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " style={{ color: "white" }}></a>
              </li>

            </ul>



            <div className="d-flex "  >

              <div style={{ margin: "10px" }}>

                <a href=" _blank" className="link">Log in</a>
              </div>
              <div style={{ margin: "10px" }}>
                <a href=" _blank" className="link">cabinet</a>

              </div>

              <div style={{ margin: "10px" }}>

                <a href=" _blank" className="link">cart</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar