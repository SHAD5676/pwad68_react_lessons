import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <><div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className={({ isActive }) => (
                   isActive ?  "active nav-item nav-link" : "nav-item nav-link" )}>
              Home 
              </NavLink>
           
              <NavLink to="/about" className={({ isActive }) => (
                   isActive ?  "active nav-item nav-link" : "nav-item nav-link" )}>
              About
              </NavLink>
               <NavLink to="/blog" className={({ isActive }) => (
                   isActive ?  "active nav-item nav-link" : "nav-item nav-link" )}>
              Blog
              </NavLink>
             
              
        
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog </Link>
                <div className="dropdown-menu m-0">
                   <NavLink to="/blog" className={({ isActive }) => (
                   isActive ?  "dropdown-item" : "dropdown-item" )}>
             All Blog
              </NavLink>
               <NavLink to="/blog/new" className={({ isActive }) => (
                   isActive ?  "dropdown-item" : "nav-item dropdown-item" )}>
             New Blog
              </NavLink>
                  
                </div>
              </div>
              
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages </Link>
                <div className="dropdown-menu m-0">
                  <Link to="blog" className="dropdown-item">Blog Grid </Link>
                  <Link to="detail" className="dropdown-item">Blog Detail </Link>
                  <Link to="team" className="dropdown-item">The Team </Link>
                  <Link to="testimonial" className="dropdown-item">Testimonial </Link>
                  <Link to="appointment" className="dropdown-item">Appointment </Link>
                  <Link to="search" className="dropdown-item">Search </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>

    </>
  )
}

export default Navbar
