import "./footer.scss";
import { Link } from "react-router-dom";
import logo from "/assets/images/logo2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src="/assets/images/logo2.png" alt="" title="logo" />
              <div>
                <span>Asean</span>
                <span>weather</span>
              </div>
            </Link>
          </div>
          <small className="website-rights">AseanWeather © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link "
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f facebook_f" />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram instagram" />
            </Link>
            <Link
              className="social-icon-link "
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube youtube" />
            </Link>
            <Link
              className="social-icon-link "
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin in" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
