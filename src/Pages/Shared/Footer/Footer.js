import React from 'react';
import logo from '../../../assets/logo.svg';
const Footer = () => {

    return (
        <div className="bg-dark text-light d-flex justify-content-between p-5">
            
            <div>
                <img src={logo} alt="" />
                <p className='text-light'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>

            <div>
                <span className="footer-title">Services</span><br />
                <a href="/" className="link link-hover text-light">Branding</a> <br />
                <a href="/" className="link link-hover text-light">Design</a> <br />
                <a href="/" className="link link-hover text-light">Marketing</a> <br />
                <a href="/" className="link link-hover text-light">Advertisement</a> <br />
            </div>

            <div>
                <span className="footer-title">Company</span><br />
                <a href="/" className="link link-hover text-light">About us</a> <br />
                <a href="/" className="link link-hover text-light">Contact</a> <br />
                <a href="/" className="link link-hover text-light">Jobs</a> <br />
                <a href="/" className="link link-hover text-light">Press kit</a> <br />
            </div>

            <div>
                <span className="footer-title">Legal</span><br />
                <a href="/" className="link link-hover text-light">Terms of use</a><br />
                <a href="/" className="link link-hover text-light">Privacy policy</a><br />
                <a href="/" className="link link-hover text-light">Cookie policy</a><br />
            </div>

        </div>
        
    );
};

export default Footer;