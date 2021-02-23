import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xs-12 text-center text-lg-start mb-3 mb-lg-0"><p className="copyright_text">Copyright &copy; {date} All Rights Reserved</p></div>
                        <div className="col-md-6 col-xs-12 text-center text-lg-end">
                            <ul className="social-icons">
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-rss"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="social-icon">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
