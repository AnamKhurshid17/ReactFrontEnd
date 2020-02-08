import React from 'react'
import {Image}  from 'react-bootstrap'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';// Router will work with the link here instead of anchor(a)

 function Footer() {
    return (
        <FooterContainer className="main-footer">
          <div className="footer-middle">
                <div className="conatiner">
                    <div className="row">
                        {/*Columns 1*/}
                        <div className="col-md-3 col-sm-6">
                        <span> &nbsp; &nbsp; &nbsp;</span>
                            <Image src="assets/navlogo.png" width="220" height="80" className="Navlogo"/>
                        </div>
                        {/*Columns 2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">FAQ's</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Purchase Policy</Link></li>
                                <li><Link to="/Contactus">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/*Columns 3*/}
                        <div className="col-md-5 col-sm-6">
                            <h4>DOWNLOAD MOBILE APP</h4>
                            <p>
                                Easy Tickets also offers information about upcoming movies, show timings, movie trailers &amp; reviews.
                            </p>
                            <Image src="assets/googleplay.png" width="80" height="35"  className="img-responsive"/>
                                <span> &nbsp; </span>
                            <Image src="assets/ios.png" width="80" height="35" className="img-responsive"/>
                        </div>

                    </div>  
                     {/* Footer Bottom */}
                     <div className="footer-bottom">
                        <p className="text-xs-center">
                        <span> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;    
                        </span>
                            &copy;{new Date().getFullYear()}Easytickets. All rights reserved
                        </p>
                    </div>     
                </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer =  styled.footer `
    .footer-middle {
                     background: var(--mainDark);
                     padding-top: 3rem;
                     color: var(--mainWhite);
                 }

    .footer-bottom{
                    padding-top: 3rem;
                    padding-bottom: 2rem;
                  }  
    ul li a {
                color: var(--mainGrey);
            } 
    ul li a:hover {
                color: var(--mainLightGrey);
            } 

     

            `;

