import React from 'react'
import ErrorImg from './Error.jpg';
import { Link } from 'react-router-dom';

export default function NotFoundcomp() {
  return (
    <>
      <div className="container my-4 d-flex align-items-center justify-content-center">
        <img src={ErrorImg}alt="404 Error" width="300" />
      </div>
      <div className="container my-4 d-flex align-items-center justify-content-center">
        <Link role="button" className="text-dark text-decoration-none" to="/"><button className="btn btn-warning rounded-pill"><h2>Home</h2></button></Link>
      </div>

      </>
  )
}
