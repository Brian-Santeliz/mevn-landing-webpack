<template>
  <div class="footer py-5 text-center">
    <footer>
      <section class="footer-Content">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <h3>Smart tech</h3>
              <div class="textwidget">
                <p>
                  Ayudarte a alcanzar el potencial que tanto deseas es nuestra
                  prioridad ¡conectar contigo es nuestro deber!
                </p>
              </div>
              <ul class="footer-social">
                <li>
                  <a class="facebook" href="#"
                    ><i class="lni-facebook-filled"></i
                  ></a>
                </li>
                <li>
                  <a class="twitter" href="#"
                    ><i class="lni-twitter-filled"></i
                  ></a>
                </li>
                <li>
                  <a class="linkedin" href="#"
                    ><i class="lni-linkedin-fill"></i
                  ></a>
                </li>
                <li>
                  <a class="google-plus" href="#"
                    ><i class="lni-google-plus"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Links Tech</h3>
                <ul class="menu">
                  <li><router-link to="/services">Servicios</router-link></li>
                  <li><router-link to="/about">Nosotros</router-link></li>
                  <li><router-link to="/plan">Planes</router-link></li>
                  <li>
                    <router-link to="/portafolio">Portafolio</router-link>
                  </li>
                  <li><router-link to="/contact">Contáctanos</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Encuentranos</h3>
                <ul class="contact-footer">
                  <li>
                    <strong>Dirección:</strong>
                    <span
                      >Av. Horizonte, sector Los Cedros. Trujillo,
                      Venezuela</span
                    >
                  </li>
                  <li><strong>Teléfono :</strong> <span>+58-4124455 </span></li>
                  <li>
                    <strong>E-mail :</strong>
                    <span
                      ><router-link to="/contact"
                        >smartinfo@tech.com</router-link
                      ></span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div class="widget">
                <h3 class="block-title">Instagram</h3>
                <ul class="instagram-footer">
                  <li>
                    <a href="#"
                      ><img src="../../public/image/i1.jpg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="../../public/image/i2.jpg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                      ><img src="../../public/image/i3.jpg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div>
                <p>
                  Desarrollado By Andres Briceño &copy;
                  {{ new Date().getFullYear() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
