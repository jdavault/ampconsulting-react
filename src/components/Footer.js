import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default class footer extends Component {
  render() {
    return (
      <div>
        {/** footer area star**/}
        <footer>
          <div class="footer__area grey-bg pt-100">
            <div class="footer__top pb-45">
              <div class="container">
                <div class="row">
                  <div
                    class="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="footer__widget mb-45">
                      <div class="footer__widget-title mb-30">
                        <div class="logo">
                          <a href="index.html">
                            <img
                              src="assets/img/logo/logo-gradient.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="footer__widget-content">
                        <p class="mb-30">
                          Copyright © 2020 All Rights Reserved passion by
                          BasicTheme
                        </p>
                        <div class="footer__social theme-social mb-30">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fab fa-vimeo-v"></i>
                                <i class="fab fa-vimeo-v"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div class="footer__widget mb-45">
                      <div class="footer__widget-title">
                        <h4>Company</h4>
                      </div>
                      <div class="footer__widget-content">
                        <div class="footer__links">
                          <ul>
                            <li>
                              <a href="#">About Us</a>
                            </li>
                            <li>
                              <a href="#">Testimonials</a>
                            </li>
                            <li>
                              <a href="#">Consulting</a>
                            </li>
                            <li>
                              <a href="#">Partners</a>
                            </li>
                            <li>
                              <a href="#">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="footer__widget mb-45">
                      <div class="footer__widget-title">
                        <h4>Resources</h4>
                      </div>
                      <div class="footer__widget-content">
                        <div class="footer__links">
                          <ul>
                            <li>
                              <a href="#">Customers</a>
                            </li>
                            <li>
                              <a href="#">Pricing</a>
                            </li>
                            <li>
                              <a href="#">News</a>
                            </li>
                            <li>
                              <a href="#">Learning Center</a>
                            </li>
                            <li>
                              <a href="#">Help desk</a>
                            </li>
                            <li>
                              <a href="#">Support</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-3 col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div class="footer__widget mb-45">
                      <div class="footer__widget-title">
                        <h4>Newsletter</h4>
                      </div>
                      <div class="footer__widget-content">
                        <div class="footer__subscribe">
                          <p class="mb-30">
                            Subscribe to out newsletter today to receive updates
                            on the latest news
                          </p>
                          <div class="footer__subscribe-form p-relative">
                            <form action="#">
                              <input type="email" placeholder="Email Address" />
                              <button type="submit">Subscribe</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/** footer area end **/}
      </div>
    )
  }
}
