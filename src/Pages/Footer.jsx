import React from "react";
import "./Footer.css";
import logo from "../Asserts/logo512.png";
import FooterNavItem from "../Components/FooterNavItem";

function Footer() {
  const usefulLinks = [
    "Home",
    "My List",
    "Categories",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4 ">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "70px" }}
                />
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                facere similique, dolor accusamus voluptas quaerat amet magni?
                Dolor nesciunt repudiandae doloremque sequi unde eum suscipit,
                qui excepturi vel sint illo?
              </p>
              <div className="social-links mt-3 ">
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6 footer-links">
              <h4>Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact</h4>
              <p>
                <strong>
                  <ion-icon name="call-outline"></ion-icon>
                </strong>
                +756-852-951
                <br />
                <strong>
                  <ion-icon name="mail-open-outline"></ion-icon>
                </strong>
                info@cineversemovies.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <strong>
            <span>Nimasha Liyanage</span>
          </strong>
          . All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
