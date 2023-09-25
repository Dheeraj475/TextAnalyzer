import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navcomp(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode} >
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
          <Link className="nav-link active" to="/about">{props.about}</Link>
        </li>
      </ul>
      {props.mode === "light"? <FontAwesomeIcon icon={faMoon} />:<FontAwesomeIcon style={{color:"white"}}  icon={faMoon}/>}&emsp;
      
      <div className="form-check form-switch">
     
      <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{`Enable - ${props.mode === "light"?"dark":"light"} mode`}</label>
    </div>
    </div>
  </div>
</nav>
  )
}

Navcomp.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navcomp.defaultProps = {
    title: "Set the title props",
    about: "About"
}