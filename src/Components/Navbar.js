import React from 'react'
import { useState } from "react";
import pic from './globe.png'
import {Link} from "react-router-dom";
import search from './search.png'
import PropTypes from 'prop-types'

export default function Navbar(props) {


  return (<>
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.col} navbar-${props.col} fixed-top mb-5`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={pic} style={{ width: "40px", height: "35px" }} /><b>  NewZilla</b></Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business"><b>Business</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment"><b>Entertainment</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health"><b>Health</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science"><b>Science</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports"><b>Sports</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology"><b>Technology</b></Link>
              </li>
              
            </ul>

            <form className="d-flex">
              <input className="form-control " type="search" id="item2" onChange={props.Change} placeholder="Search" aria-label="Search" />
             <Link to={`/filter=${props.value}`}> <button className="btn btn-outline-secondary"  type='button' onClick={props.search}><img src={search} style={{height:"30px",width:"30px"}}/></button></Link>
            </form>
            


            <div className={`form-check form-switch my-2 ms-lg-3 d-inline-block  text-${props.txt}`} style={{ width: "122px" }}>
              <input className="form-check-input" type="checkbox" onClick={props.Mode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.darkMODE}</label>
            </div>
             
          </div>
        </div>
      </nav>
      <h1 className={`text-center text-${props.txt}`} style={{ marginTop: "60px", }}>NewZilla -Top News</h1>
    </div>

  </>
  )
}
Navbar.defaultProps = {
    value: ' '  }



// <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item"> 
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>