import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row row-lg-eq-height">
                    <div className="col-lg-12 order-lg-1 order-2">
                        <div className="footer_content">
                            <div className="footer_logo"><a href="index.html">avision</a></div>
                            <div className="footer_social">
                                <ul>
                                    <li className="footer_social_facebook"><a href="index.html"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_twitter"><a href="index.html"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_pinterest"><a href="index.html"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_vimeo"><a href="index.html"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_instagram"><a href="index.html"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_google"><a href="index.html"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="copyright">
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
