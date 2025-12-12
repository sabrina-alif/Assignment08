import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer = () => {
    return (
    <div className=''>
      <footer className="footer sm:footer-horizontal bg-gray-50 text-black items-center p-4">
        
        <aside className="grid-flow-col items-center">

          <img className='h-6' src="../../assets/logo.png" alt="logo" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
        </aside>

        <nav className="flex flex-col items-center gap-5 md:place-self-center md:justify-self-end">
          <p className="font-semibold">Social Links</p>
        <p className='flex flex-row gap-3'>
        <FaXTwitter />
        <CiLinkedin />
        <TiSocialFacebookCircular />
        </p>

          
        </nav>
      </footer>

      <footer className="footer footer-center bg-gray-50 text-black p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - 
            All right reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;