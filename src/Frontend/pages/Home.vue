<template>
<div>
  <header id="slider-area">  
      <nav class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
        <div class="container">          
          <a class="navbar-brand" href="index.html"><span class="lni-bulb"></span>Smart Tech</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="lni-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#slider-area">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#services">Services</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#features">Features</a>
              </li>                            
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#portfolios">Works</a>
              </li>            
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#pricing">Pricing</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#team">Team</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#subscribe">Subscribe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#blog">Blog</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact">Contact</a>
              </li> 
            </ul>              
          </div>
        </div>
      </nav> 

      <!-- Main Carousel Section -->
      <div id="carousel-area">
        <div id="carousel-slider" class="carousel slide carousel-fade" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-slider" data-slide-to="1"></li>
            <li data-target="#carousel-slider" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img src="../public/image/bg-1.jpg" alt="">
              <div class="carousel-caption text-left">
                <h1 class="wow fadeInRight" >Creando Diseños Únicos</h1>  
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">Bootstrap 4 Template</h2>
                <h4 class="wow fadeInRight" data-wow-delay="0.6s">Comes with All Essential Sections & Elements</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInRight" data-wow-delay="0.9s">Download</a>
                <a href="#" class="btn btn-lg btn-border wow fadeInRight" data-wow-delay="1.2s">Get Started!</a>
              </div>
            </div>
            </div>
            <div class="carousel-item">
              <img src="../public/image/bg-3.jpg" alt="">
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInDown" data-wow-delay="0.3s">Bundled With Tons of</h3>
                <h2 class="wow bounceIn" data-wow-delay="0.6s">Cutting-edge Features</h2> 
                <h4 class="wow fadeInUp" data-wow-delay="0.9s">Parallax, Video, Product, Premium Addons and More...</h4>
                <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInUp" data-wow-delay="1.2s">View Works</a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../public/image/bg-2.jpg" alt="">
              <div class="carousel-caption text-center">
                <h3 class="wow fadeInDown" data-wow-delay="0.3s">Ready For</h3>
                <h2 class="wow fadeInRight" data-wow-delay="0.6s">Multi-purpose Websites</h2> 
                <h4 class="wow fadeInUp" data-wow-delay="0.6s">App, Business, SaaS and Landing Pages</h4>
                <a href="#" class="btn btn-lg btn-border wow fadeInUp" data-wow-delay="0.9s">Purchase</a>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
            <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-left"></i></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
            <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-right"></i></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
     

    </header>
</div>
</template>

<script>
import Button from "../components/Home/Button.vue";
import Hero from "../components/Home/Hero.vue";
import Service from "../components/Home/Service.vue";
import ServiceBig from "../components/Home/ServiceBig.vue";
import Contact from "../components/Home/Contact.vue";
export default {
    components: {
        Button,
        Hero,
        Service,
        ServiceBig,
        Contact,
    },
};
</script>
