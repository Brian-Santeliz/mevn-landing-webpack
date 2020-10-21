<template>
  <div>
    <header id="slider-area">
      <div id="carousel-area">
        <div>
          <div>
            <div class="carousel-item active">
              <img src="../public/image/laptop.jpg" />
              <div class="carousel-caption text-left">
                <h1 class="wow fadeInRight text-white">
                  Soluciones Innovadoras
                </h1>
                <h2 class="wow fadeInRight" data-wow-delay="0.4s">
                  Transforma tu negocio
                </h2>
                <h4 class="wow fadeInRight font-bold" data-wow-delay="0.6s">
                  Optimiza tu empresa con las mejores herramientas del mundo
                  <span class="tech"> Tech</span>
                </h4>
                <router-link
                  to="/contact"
                  class="btn btn-lg btn-common btn-effect wow fadeInRight"
                  >Contáctanos!</router-link
                >
                <router-link
                  to="/services"
                  class="btn btn-lg btn-border wow fadeInRight"
                  data-wow-delay="1.2s"
                  >Servicios</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="services" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Servicios</h2>
          <span>Servi Tech</span>
          <p class="section-subtitle">
            Para nosotros ayudarte es prioridad, te ofrecemos:
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div
              class="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <div class="icon color-1">
                <i class="lni-pencil"></i>
              </div>
              <h4>Escritores De Contenido</h4>
              <p>
                La forma en la que te comunicas dice mucho, es por ello que
                tenemos expertos que te ayudarán a crear contenido de valor.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div
              class="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.4s"
            >
              <div class="icon color-2">
                <i class="lni-cog"></i>
              </div>
              <h4>Código Fresco</h4>
              <p>
                Para nuestros desarrolladores es importante que tu Website este
                bien estructurada y posicionada, te ayudaremos en este proceso.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div
              class="item-boxes services-item wow fadeInDown"
              data-wow-delay="0.6s"
            >
              <div class="icon color-3">
                <i class="lni-stats-up"></i>
              </div>
              <h4>Diseño Gráfico</h4>
              <p>
                Ofrecemos una gran variedad de diseños y personalización de
                marca para que tus clientes se sientan más conectados con tu
                marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="clients" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nuestros Clientes</h2>
          <span>Smart clientes</span>
        </div>
        <!-- Row and Scroller Wrapper Starts -->
        <div class="row" id="clients-scroller" style="justify-content: center">
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo1.png" alt="" />
          </div>
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo2.png" alt="" />
          </div>
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo3.png" alt="" />
          </div>
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo4.png" alt="" />
          </div>
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo5.png" alt="" />
          </div>
          <div class="client-item-wrapper p-4">
            <img src="../public/image/logo6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <section id="features" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Un poco de Smart Tech</h2>
          <span>Nosotros</span>
          <p class="section-subtitle">
            Smart tech es una compañía diseñada para apoyarte en tu crecimiento
            digital.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="featured-box">
              <div class="featured-icon">
                <i class="lni-layout"></i>
              </div>
              <div class="featured-content">
                <div class="icon-o"><i class="lni-layout"></i></div>
                <h4>Diseño adaptado</h4>

                <p>
                  Presentamos un diseño fresco y adaptado específicamente a tu
                  marca, para que sea mucho más sencillo encajar con tu cliente
                  ideal.
                </p>
              </div>
            </div>
          </div>
          <!-- End featured -->
          <!-- Start featured -->
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="featured-box">
              <div class="featured-icon">
                <i class="lni-tab"></i>
              </div>
              <div class="featured-content">
                <div class="icon-o"><i class="lni-tab"></i></div>
                <h4>Herramientas de optimización</h4>
                <p>
                  Contamos con las mejores herramientas para que tu perfil sea
                  un ganador y siempre aparezca en los primeros resultados de
                  los motores de búsqueda.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="featured-box">
              <div class="featured-icon">
                <i class="lni-rocket"></i>
              </div>
              <div class="featured-content">
                <div class="icon-o"><i class="lni-rocket"></i></div>
                <h4>Desarrollo Frontend y Backend</h4>
                <p>
                  Crearemos soluciones innovadoras y eficaces para tu empresa.
                  Con la ayuda de nuestros programadores no tendrás de que
                  preocuparte por nada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 d-flex justify-content-center">
        <router-link to="/about" class="btn btn-hover btn-outline-info"
          >Conoce nuestro equipo!</router-link
        >
      </div>
    </section>

    <section
      id="call-action"
      class="call-action-area"
      style="background: #f9f9f9 !important"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="call-action-content mt-45">
              <h3 class="action-title">Suscribete a nuestra Newsletter!</h3>
              <p class="text">Nunca compartiremos tu email.</p>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="call-action-form mt-50">
              <form>
                <input
                  required
                  type="email"
                  placeholder="Jamas te enviaremos spam..."
                />
                <div class="action-btn rounded-buttons">
                  <button class="main-btn rounded-three btn btn-info">
                    Suscribete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="call-action section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="cta-trial text-center">
              <h3>¿Quieres potenciar tu marca? Nosotros te ayudamos</h3>
              <p>
                Generar muchas ventas con tan solo un perfil o un website <br />
                es sorprendente ¿verdad? No te quedes atrás.
              </p>
              <router-link to="/plan" class="btn btn-common btn-effect"
                >¡Comprar!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="counters section bg-defult">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lni-rocket"></i>
              </div>
              <div class="fact-count">
                <h3><span>100</span>%</h3>
                <h4>Efectividad</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lni-coffee-cup"></i>
              </div>
              <div class="fact-count">
                <h3><span>600</span></h3>
                <h4>Páginas web realizadas</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lni-user"></i>
              </div>
              <div class="fact-count">
                <h3><span>+2000</span></h3>
                <h4>Smart clientes</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lni-heart"></i>
              </div>
              <div class="fact-count">
                <h3><span>5200</span></h3>
                <h4>Seguidores</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
