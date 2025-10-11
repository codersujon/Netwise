import React from 'react'
import logo from "../assets/img/logo/logo.svg"
import Menu from "./Menu"
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="ep-header-section w-100" id="sticky-header">

        <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
            <div className="container header-one-container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Menu />
                    <div className="call-us">
                        <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                        <span className="icon d-flex justify-content-center
                        align-items-center">
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <div className="info">
                            <span className="title">Need help?</span>
                            <h5 className="number">+123 456 7890</h5>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile navbar part start  */}
        <div className="mobile-menu-area d-block d-xl-none">
            <div className="container">
                <div className="mobile-topbar">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                    <Link to="/"> <img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="bars">
                    <i className="fas fa-bars"></i>
                    </div>
                </div>
                </div>
            </div>
            <div className="mobile-menu-overlay"></div>
            <div className="mobile-menu-main">
                <div className="logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
                <div className="menu-body">
                <div className="menu-list">
                    <ul className="list-unstyled">
                    <li className="sub-mobile-menu">
                        <a href="#">Home <i className="fas fa-chevron-down float-end"></i></a>
                        <ul className="list-unstyled">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="home-two.html">Home Two</a></li>
                        </ul>
                    </li>
                    <li className="sub-mobile-menu">
                        <a href="about.html">About Us</a>
                    </li>
                    <li className="sub-mobile-menu">
                        <a href="#">Services <i className="fas fa-chevron-down float-end"></i></a>
                        <ul className="list-unstyled">
                        <li>
                            <a href="services.html">Service Single</a>
                        </li>
                        <li>
                            <a href="service-details.html">Service Details</a>
                        </li>
                        </ul>
                    </li>
                    <li className="sub-mobile-menu">
                        <a href="#">Projects <i className="fas fa-chevron-down float-end"></i></a>
                        <ul className="list-unstyled">
                        <li>
                            <a href="projects.html">Project Single</a>
                        </li>
                        <li>
                            <a href="project-details.html">Project Details</a>
                        </li>
                        </ul>
                    </li>
                    <li className="sub-mobile-menu">
                        <a href="#">Blog <i className="fas fa-chevron-down float-end"></i></a>
                        <ul className="list-unstyled">
                        <li>
                            <a href="blog.html">Blog Single</a>
                        </li>
                        <li>
                            <a href="blog-details.html">Blog Details</a>
                        </li>
                        </ul>
                    </li>
                    <li className="sub-mobile-menu">
                        <a href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="call-us p-4">
                <a href="tel:+1234567890" className="call-us-btn d-flex align-items-center gap-3">
                    <span className="icon d-flex justify-content-center
                    align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    </span>
                    <div className="info">
                    <span className="title">Need help?</span>
                    <h5 className="number">+123 456 7890</h5>
                    </div>
                </a>
                </div>
            </div>
        </div>
        {/* mobile navbar part end  */}

    </header>
  )
}

export default Header
