import React from "react";
 import "./Footer.css";



const Footer = () => (
   <footer className="footer fixed-bottom border-top">
    <div className="container-fluid footer navbar-fixed-bottom footerBody">
  <div className="row">
<div className="col-xs-8 col-sm-8 col-md-8 copyright">
  &#169; Vivian Tuong Nguyen | <small>All rights reserved</small>
</div>

<div className="col-xs-4 col-sm-4 col-md-4">
  <a href="https://viviann224.github.io/" className="socialLink" target="_blank"><img src="/images/social/logo.png" id="socialIcon"/></a>
  <a href="https://github.com/viviann224" className="socialLink" target="_blank"><img src="/images/social/githublogo.png" id="socialIcon"/></a>
  <a href="https://www.linkedin.com/in/viviantuongnguyen" className="socialLink" target="_blank"><img src="/images/social/linkedinlogo.png" id="socialIcon"/></a>
</div>
</div></div>
</footer>
);

export default Footer;
