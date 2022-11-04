import React from 'react';
import logo from '../../../assets/logo.svg';
const Footer = () => {

    return (
        <div className="d-flex justify-content-between container">
            
            <div>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>

            <div>
                <span className="footer-title">Services</span><br />
                <a href="/" className="link link-hover">Branding</a> <br />
                <a href="/" className="link link-hover">Design</a> <br />
                <a href="/" className="link link-hover">Marketing</a> <br />
                <a href="/" className="link link-hover">Advertisement</a> <br />
            </div>

            <div>
                <span className="footer-title">Company</span><br />
                <a href="/" className="link link-hover">About us</a> <br />
                <a href="/" className="link link-hover">Contact</a> <br />
                <a href="/" className="link link-hover">Jobs</a> <br />
                <a href="/" className="link link-hover">Press kit</a> <br />
            </div>

            <div>
                <span className="footer-title">Legal</span><br />
                <a href="/" className="link link-hover">Terms of use</a><br />
                <a href="/" className="link link-hover">Privacy policy</a><br />
                <a href="/" className="link link-hover">Cookie policy</a><br />
            </div>

        </div>
        
    );
};

export default Footer;