<template>
  <div>
    <nav class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><span class="lni-bulb"></span>Smart Tech</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="lni-menu"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <li class="nav-item">
              <router-link class="nav-link page-scroll" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link page-scroll" to="/services"
                >Servicios</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link page-scroll" to="/about"
                >Nosotros</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link page-scroll" to="/portafolio"
                >Portafolio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link page-scroll" to="/contact"
                >Contáctanos</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
