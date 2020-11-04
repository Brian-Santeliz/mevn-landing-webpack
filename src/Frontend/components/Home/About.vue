<template>
  <section class="seccion">
    <div class="container">
      <div class="seccion-header">
        <h2 class="seccion-title">Un poco de Smart Tech</h2>
        <p>
          Smart tech es una compañía diseñada para apoyarte en tu crecimiento
          digital.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="acerca-contenedor">
            <div class="icono">
              <i class="lni lni-pallet"></i>
            </div>
            <div class="acerca-contenido">
              <h4>Diseño adaptado</h4>

              <p>
                Presentamos un diseño fresco y adaptado específicamente a tu
                marca, para que sea mucho más sencillo encajar con tu cliente
                ideal.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="acerca-contenedor">
            <div class="icono">
              <i class="lni lni-timer"></i>
            </div>
            <div class="acerca-contenido">
              <h4>Herramientas de optimización</h4>
              <p>
                Contamos con las mejores herramientas para que tu perfil sea un
                ganador y siempre aparezca en los primeros resultados de los
                motores de búsqueda.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="acerca-contenedor">
            <div class="icono">
              <i class="lni lni-code"></i>
            </div>
            <div class="acerca-contenido">
              <h4>Desarrollo Frontend y Backend</h4>
              <p>
                Crearemos soluciones innovadoras y eficaces para tu empresa. Con
                la ayuda de nuestros programadores no tendrás de que preocuparte
                por nada.
              </p>
            </div>
          </div>
        </div>
        <div class="container mt-5 d-flex justify-content-center">
          <router-link to="/about" class="btn btn-hover btn-outline-info"
            >Conoce nuestro equipo!</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>