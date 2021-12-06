import React from 'react'
// import PropTypes from 'prop-types'

import {
  Link
} from "react-router-dom";

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary" onClick={()=>props.toggl("#0d6efd")}>1</button>
        <button type="button" className="btn btn-secondary" onClick={()=>props.toggl("grey")}>2</button>
        <button type="button" className="btn btn-success" onClick={()=>props.toggl("#198754")}>3</button>
        <button type="button" className="btn btn-danger" onClick={()=>props.toggl("#dc3545")}>4</button>
      </div>

      <div className= {`form-check form-switch text-${props.mode==="light"}?"light":"dark"`}>
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color: props.mode==="light"?"black":"white"}}htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
// Navbar.propTypes ={
//     title:PropTypes.string
// }

// Navbar.defaultProps={
//     title: "Set me"
// }

