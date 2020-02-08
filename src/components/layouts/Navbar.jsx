import React from 'react'
import {Image}  from 'react-bootstrap'; 
import {Link} from 'react-router-dom';// Router will work with the link here instead of anchor(a)

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/Home">
                <Image src="assets/navlogo.png" width="220" height="80" className="Navlogo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fa fa-bars" style={{color: '#fff'}}/>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                    
                        <Link className="nav-link text-white text-uppercase ml-5" to="/Home"><i className="fa fa-home"></i>Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/Schedule">Schedule</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/Booking">Booking</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/Terminal">Terminals</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/Contactus">Contact Us</Link>
                    </li>
                
                 </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
     </div>
</nav>
    )
}
