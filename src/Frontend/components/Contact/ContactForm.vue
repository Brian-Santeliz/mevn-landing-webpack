<template>
  <section class="section">
    <div class="contact-form">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Cuéntanos Tus iDEAS</h2>
          <span>Smart Idea</span>
          <p class="section-subtitle">
            Potencia tu marca con Smart. Contáctanos.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-9 col-md-9 col-xs-12">
            <div class="contact-block">
              <form id="contactForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Escribe tu nombre"
                        required
                      />
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        required
                      />
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Asunto"
                        class="form-control"
                        required
                      />
                      <div></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Cuentanos tu Smart Idea..."
                        rows="7"
                        required
                      ></textarea>
                      <div></div>
                    </div>
                    <div class="submit-button">
                      <button
                        class="btn btn-common btn-effect"
                        id="submit"
                        type="submit"
                      >
                        Enviar Mensaje
                      </button>
                      <div id="msgSubmit" class="h3 hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div class="contact-deatils">
              <div class="contact-info_area">
                <div class="contact-info">
                  <i class="lni-map"></i>
                  <h5>Dirección</h5>
                  <p>Av. Horizonte, sector Los Cedros. Trujillo, Venezuela</p>
                </div>
                <div class="contact-info">
                  <i class="lni-star"></i>
                  <h5>E-mail</h5>
                  <p>smartinfo@tech.com</p>
                </div>
                <div class="contact-info">
                  <i class="lni-phone"></i>
                  <h5>Teléfono</h5>
                  <p>+58-4124455</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>