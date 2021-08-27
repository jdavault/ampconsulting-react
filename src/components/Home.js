import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
      <div>
          <main>
            {/** </main> hero area start **/}
            <section class="hero__area p-relative">
                <div class="hero__shape">
                    <img class="one" src="assets/img/icon/slider/03/icon-1.png" alt=""/>
                    <img class="two" src="assets/img/icon/slider/03/icon-2.png" alt=""/>
                    <img class="three" src="assets/img/icon/slider/03/icon-3.png" alt=""/>
                    <img class="four" src="assets/img/icon/slider/03/icon-4.png" alt=""/>
                    <img class="five" src="assets/img/icon/slider/03/icon-6.png" alt=""/>
                    <img class="six" src="assets/img/icon/slider/03/icon-7.png" alt=""/>
                </div>
                <div class="hero__item hero__height d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-5 order-last">
                                <div class="hero__thumb-wrapper ml-100 scene ">
                                    <div class="hero__thumb one">
                                        <img class="layer" data-depth="0.2" src="assets/img/slider/03/slider-1.jpg" alt=""/>
                                    </div>
                                    <div class="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                                        <img class="layer" data-depth="0.3" src="assets/img/slider/03/slider-2.jpg" alt=""/>
                                    </div>
                                    <div class="hero__thumb three d-none d-sm-block">
                                        <img class="layer" data-depth="0.4" src="assets/img/slider/03/slider-3.jpg" alt=""/>
                                    </div>
                                    <div class="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                                        <img class="layer" data-depth="0.5" src="assets/img/slider/03/slider-4.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 d-flex align-items-center">
                                <div class="hero__content">
                                    <span class="wow fadeInUp" data-wow-delay=".2s">Welcome To Zibber.</span>
                                    <h1 class="wow fadeInUp" data-wow-delay=".4s">Get more <br/> Impact Fasted</h1>
                                    <p class="wow fadeInUp" data-wow-delay=".6s">Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around.</p>
                                    <a href="about.html" class="z-btn z-btn-border wow fadeInUp" data-wow-delay=".8s">See what's New</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> hero area end **/}

            {/** </main> services area start **/}
            <section class="services__area-2 mt--120 pt-270 pb-140 p-relative" data-background="assets/img/bg/wave-bg-2.png">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="services__item services__item-2 mb-30 transition-3 white-bg wow fadeInUp" data-wow-delay=".2s">
                                <div class="services__icon mb-35">
                                    <img src="assets/img/icon/services/services-1.png" alt="services"/>
                                </div>
                                <div class="services__content services__content-2">
                                    <h3><a href="services-details.html">Share Knowledge</a></h3>
                                    <p>Data Tracking</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="services__item services__item-2 mb-30 transition-3 white-bg wow fadeInUp" data-wow-delay=".4s">
                                <div class="services__icon mb-35">
                                    <img src="assets/img/icon/services/services-2.png" alt="services"/>
                                </div>
                                <div class="services__content services__content-2">
                                    <h3><a href="services-details.html">Meet New Friends</a></h3>
                                    <p>User Experience</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="services__item services__item-2 mb-30 transition-3 white-bg wow fadeInUp" data-wow-delay=".6s">
                                <div class="services__icon mb-35">
                                    <img src="assets/img/icon/services/services-3.png" alt="services"/>
                                </div>
                                <div class="services__content services__content-2">
                                    <h3><a href="services-details.html">Customer Service</a></h3>
                                    <p>App Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div class="services__item services__item-2 mb-30 transition-3 white-bg wow fadeInUp" data-wow-delay=".8s">
                                <div class="services__icon mb-35">
                                    <img src="assets/img/icon/services/services-4.png" alt="services"/>
                                </div>
                                <div class="services__content services__content-2">
                                    <h3><a href="services-details.html">Strategic advice</a></h3>
                                    <p>Press Releases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about__area-2 pt-130">
                        <div class="row">
                            <div class="col-xl-7 col-lg-6">
                                <div class="about__thumb-2 p-relative m-img wow fadeInLeft" data-wow-delay=".2s">
                                    <img src="assets/img/about/about-2.png" alt=""/>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6">
                                <div class="about__content">
                                    <div class="section__title section__title-3 mb-25">
                                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Startup & Early Consulting Business Package</h2>
                                    </div>
                                    <p class="wow fadeInUp" data-wow-delay=".6s">We help you weather today's uncertainty through our best team intelligence and needs.</p>
                                    <div class="about__list wow fadeInUp" data-wow-delay=".8s">
                                        <ul>
                                            <li><span><i class="far fa-check"></i>Innovative ideas</span></li>
                                            <li><span><i class="far fa-check"></i>Professional assistance</span></li>
                                            <li><span><i class="far fa-check"></i>Financial advisory</span></li>
                                        </ul>
                                    </div>
                                    <a href="about.html" class="z-btn wow fadeInUp" data-wow-delay="1s">What we do<i class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> services area end **/}

            {/** </main> services area start **/}
            <section class="services__area-3 pt-115 pb-160">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="section-title section__title-3 mb-70">
                                <h2>We Help <br/> Clients Make Profit</h2>
                                <p>We help you weather today's uncertainty through our best team.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="services__nav wow fadeInUp" data-wow-delay=".4s">
                                <ul class="nav nav-pills " id="services-tab" role="tablist">
                                    <li class="nav-item mb-45">
                                        <a class="nav-link active" id="share-tab" data-toggle="pill" href="#share" role="tab" aria-controls="share" aria-selected="true">
                                            <i class="icon_ribbon_alt"></i>Share Knowledge
                                        </a>
                                    </li>
                                    <li class="nav-item mb-30">
                                        <a class="nav-link" id="customer-tab" data-toggle="pill" href="#customer" role="tab" aria-controls="customer" aria-selected="true">
                                            <i class="icon_tools"></i> Customer Service
                                        </a>
                                    </li>
                                    <li class="nav-item mb-30">
                                        <a class="nav-link" id="social-tab" data-toggle="pill" href="#social" role="tab" aria-controls="social" aria-selected="true">
                                            <i class="icon_heart_alt"></i> Social Media
                                        </a>
                                    </li>
                                    <li class="nav-item mb-30">
                                        <a class="nav-link" id="financial-tab" data-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                            <i class="icon_bag_alt"></i> Financial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="services__tab grey-bg-18">
                                <div class="tab-content wow fadeInUp" data-wow-delay=".6s" id="services-content">
                                    <div class="tab-pane fade show active" id="share" role="tabpanel" aria-labelledby="share-tab">
                                        <div class="services__nav-content pt-90 pb-90">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-6">
                                                    <div class="services__thumb text-lg-right m-img">
                                                        <img src="assets/img/services/services-1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-6">
                                                    <div class="services__content-3 pl-70 pr-70">
                                                        <h3>Customer Service</h3>
                                                        <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                                                        <div class="services__icon-wrapper d-md-flex mb-35">
                                                            <div class="services__icon-item d-flex mr-60 mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-9.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Acquisitions Finance Consulting</h3>
                                                                </div>
                                                            </div>
                                                            <div class="services__icon-item d-flex mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-10.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Private Placement Consulting</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="about.html" class="z-btn">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                                        <div class="services__nav-content pt-90 pb-90">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-6">
                                                    <div class="services__thumb text-lg-right m-img">
                                                        <img src="assets/img/services/services-1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-6">
                                                    <div class="services__content-3 pl-70 pr-70">
                                                        <h3>Customer Service</h3>
                                                        <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                                                        <div class="services__icon-wrapper d-md-flex mb-35">
                                                            <div class="services__icon-item d-flex mr-60 mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-9.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Acquisitions Finance Consulting</h3>
                                                                </div>
                                                            </div>
                                                            <div class="services__icon-item d-flex mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-10.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Private Placement Consulting</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="about.html" class="z-btn">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                                        <div class="services__nav-content pt-90 pb-90">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-6">
                                                    <div class="services__thumb text-lg-right m-img">
                                                        <img src="assets/img/services/services-1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-6">
                                                    <div class="services__content-3 pl-70 pr-70">
                                                        <h3>Customer Service</h3>
                                                        <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                                                        <div class="services__icon-wrapper d-md-flex mb-35">
                                                            <div class="services__icon-item d-flex mr-60 mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-9.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Acquisitions Finance Consulting</h3>
                                                                </div>
                                                            </div>
                                                            <div class="services__icon-item d-flex mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-10.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Private Placement Consulting</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="about.html" class="z-btn">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                                        <div class="services__nav-content pt-90 pb-90">
                                            <div class="row">
                                                <div class="col-xl-5 col-lg-6">
                                                    <div class="services__thumb text-lg-right m-img">
                                                        <img src="assets/img/services/services-1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-6">
                                                    <div class="services__content-3 pl-70 pr-70">
                                                        <h3>Customer Service</h3>
                                                        <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.</p>
                                                        <div class="services__icon-wrapper d-md-flex mb-35">
                                                            <div class="services__icon-item d-flex mr-60 mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-9.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Acquisitions Finance Consulting</h3>
                                                                </div>
                                                            </div>
                                                            <div class="services__icon-item d-flex mb-30">
                                                                <div class="icon mr-20">
                                                                    <img src="assets/img/icon/services/services-10.png" alt=""/>
                                                                </div>
                                                                <div class="text">
                                                                    <h3>Private Placement Consulting</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="about.html" class="z-btn">Get Started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> services area end **/}


            {/** </main> testimonbial area start **/}
            <section class="testimoinal__area gradient-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6">
                            <div class="testimonial__content pt-165 pb-175">
                                <div class="section__title section__title-3 mb-30">
                                    <span class="white-color wow fadeInUp" data-wow-delay=".2s"> Testimonials</span>
                                    <h2 class="white-color wow fadeInUp" data-wow-delay=".4s">Featured Client Success Story</h2>
                                </div>
                                <div class="testimonial__slider owl-carousel pb-70 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="testimonial__item">
                                        <p class="white-color">He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</p>
                                        <div class="testimonial__content d-flex align-items-center">
                                            <div class="quote mr-20">
                                                <img src="assets/img/icon/testimonial/quote.png" alt="quote"/>
                                            </div>
                                            <div class="testimonial__info">
                                                <h4 class="white-color">John Doe</h4>
                                                <span class="white-color">Founder and CEO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial__item">
                                        <p class="white-color">He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</p>
                                        <div class="testimonial__content d-flex align-items-center">
                                            <div class="quote mr-20">
                                                <img src="assets/img/icon/testimonial/quote.png" alt="quote"/>
                                            </div>
                                            <div class="testimonial__info">
                                                <h4 class="white-color">Shahnewaz Sakil</h4>
                                                <span class="white-color">Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6">
                            <div class="testimonial__thumb m-img text-right pt-120 wow fadeInRight" data-wow-delay=".8s">
                                <img src="assets/img/testimonial/testimonial-1.png" alt="testimonbial"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> testimonbial area end **/}

            {/** </main> project area start **/}
            <section class="project__area pt-115 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7">
                            <div class="section-title section__title-3 mb-70">
                                <h2 class="wow fadeInUp" data-wow-delay=".2s">Future is brighter <br/> when you're more prepared</h2>
                                <p class="wow fadeInUp" data-wow-delay=".4s">We help you weather today's uncertainty through our best team <br/> intelligence and needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="project__slider owl-carousel wow fadeInUp" data-wow-delay=".6s">
                                <div class="project__item grey-bg-19">
                                    <div class="project__content">
                                        <div class="project__no">
                                            <h5>1</h5>
                                        </div>
                                        <h3><a href="portfolio-details.html">Organizational <br/> design for business</a></h3>
                                    </div>
                                    <div class="project__thumb m-img">
                                        <img src="assets/img/project/project-1.png" alt=""/>
                                    </div>
                                </div>
                                <div class="project__item grey-bg-19">
                                    <div class="project__content">
                                        <div class="project__no">
                                            <h5>2</h5>
                                        </div>
                                        <h3><a href="portfolio-details.html">Solve customer <br/>problems in a flash</a></h3>
                                    </div>
                                    <div class="project__thumb m-img">
                                        <img src="assets/img/project/project-2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> project area end **/}

            {/** </main> faq area start **/}
            <section class="faq__area pb-200 pt-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-5">
                            <div class="faq__content">
                                <div class="section-title mb-45">
                                    <h2 class="wow fadeInLeft" data-wow-delay=".2s">Do you have <br/> Any question</h2>
                                    <p class="wow fadeInLeft" data-wow-delay=".4s">We help you weather today's uncertainty through our best team.</p>
                                </div>
                                <a href="about.html" class="z-btn z-btn-border wow fadeInLeft" data-wow-delay=".6s">All Question</a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
                            <div class="faq__accordion p-relative">
                                <div id="accordion">
                                    <div class="card wow fadeInRight" data-wow-delay=".2s">
                                        <div class="card-header" id="acc_1">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                                                Can you help my business grow?
                                            </button>
                                        </h5>
                                        </div>

                                        <div id="collapse_1" class="collapse show" aria-labelledby="acc_1" data-parent="#accordion">
                                        <div class="card-body">
                                            <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card wow fadeInRight" data-wow-delay=".4s">
                                        <div class="card-header" id="acc_2">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                What are your best interest rates?
                                            </button>
                                        </h5>
                                        </div>

                                        <div id="collapse_2" class="collapse" aria-labelledby="acc_2" data-parent="#accordion">
                                        <div class="card-body">
                                            <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card wow fadeInRight" data-wow-delay=".6s">
                                        <div class="card-header" id="acc_3">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" aria-controls="collapse_3">
                                                How do you calculate cost of services?
                                            </button>
                                        </h5>
                                        </div>

                                        <div id="collapse_3" class="collapse" aria-labelledby="acc_3" data-parent="#accordion">
                                        <div class="card-body">
                                            <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="card wow fadeInRight" data-wow-delay=".8s">
                                        <div class="card-header" id="acc_4">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" aria-controls="collapse_4">
                                                How do you calculate cost of services?
                                            </button>
                                        </h5>
                                        </div>

                                        <div id="collapse_4" class="collapse" aria-labelledby="acc_4" data-parent="#accordion">
                                        <div class="card-body">
                                            <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> faq area end **/}

            {/** </main> cta area start **/}
            <section class="cta__area pt-180 pb-155" data-background="assets/img/cta/cta-bg.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1">
                            <div class="cta__content text-center">
                                <span class="wow fadeInUp" data-wow-delay=".2s">We’ve added a new exciting feature in v2.0.</span>
                                <h1 class="wow fadeInUp" data-wow-delay=".4s">Do you have any question? Feel free to contact us</h1>
                                <div class="cta__btn wow fadeInUp" data-wow-delay=".6s">
                                    <a href="contact.html" class="z-btn z-btn-white mb-30">Contact Us</a>
                                    <a href="contact.html" class="z-btn z-btn-transparent mb-30">Work with us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** </main> cta area end **/}

        </main>
      </div>
    )
  }
}
