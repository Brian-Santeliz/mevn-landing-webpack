<template>
<div>
    <div class="site-section">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-7 text-center" style="margin-top:7rem;">
                    <h2 class="section-title">Nuestros Servicios</h2>
                    <p class="lead">Contamos con los mejores profesionales dispuestos a solucionar tus problemas, aclarar tus dudas y ayudarte en el camino del emprendimiento digital.</p>
                </div>
            </div>
            <div class="row align-items-stretch">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-autorenew"></span>
                            </span>
                        </div>
                        <div>
                            <h3>Community Manager</h3>
                            <p>Profesionales dedicados a la interacción y feedback entre el público y tu marca. Se necesita la presencia de un CM para conocer que quiere el público.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-store_mall_directory"></span>
                            </span>
                        </div>
                        <div>
                            <h3>Social Media Manager</h3>
                            <p>Se encarga de diseñar el plan y la estrategias que se usarán para que tu marca se eleve, así como también analiza las interacciones de tus redes.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-shopping_basket"></span>
                            </span>
                        </div>
                        <div>
                            <h3>SEO & SEM</h3>
                            <p>Expertos en el posicionamiento de tu web ayudaran a que en los motores de busqueda siempre aparezcas en los primeros resultados.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-settings_backup_restore"></span>
                            </span>
                        </div>
                        <div>
                            <h3>Renovamos para tu marca</h3>
                            <p>Cada cierto tiempo los algoritmos de las redes sociales cambian, debemos analizarlos y saber que tomarán en cuenta, para así sacarles el máximo provecho.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-sentiment_satisfied"></span>
                            </span>
                        </div>
                        <div>
                            <h3>Trabajo óptimo</h3>
                            <p>Para nosotros tu opinión es muy importante, queremos que te sientas completamente satisfecho y ayudarte a que el crecimiento de tu marca si te haga ver grandes resultados.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap">
                                <span class="text-primary icon-power"></span>
                            </span>
                        </div>
                        <div>
                            <h3>Tecnología Web</h3>
                            <p>Usamos las tecnologias web modernas para distinguir tu marca e innovar en el mercado. Ofreciendo herramientas para que puedas escalar y administrar tu web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="feature-big">
        <div class="container">
            <div class="row mb-5 site-section">
                <div class="col-lg-7">
                    <img src="../../public/image/coding.svg" alt="Image" class="img-fluid" />
                </div>
                <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                    <h2 class="text-black text-service-one">Evolution Web Development Platinum</h2>
                    <p class="mb-4">Te ofrecemos el pack de Desarrollo Web más completo actualmente. Incluye creación de Landing Page, Portafolio Profesional, Ecommerce, Blog Administrativo, CRM & SRM, Search Engine Optimization.</p>
                </div>
            </div>

            <div class="row mb-5 site-section">
                <div class="col-lg-7 order-1 order-lg-2">
                    <img src="../../public/image/social.svg" alt="Image" class="img-fluid" />
                </div>
                <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1 container-service-two">
                    <h2 class="text-black text-service-two">Evolution Marketing Premium</h2>
                    <p class="mb-4">Te ayudamos a tener un alcance global con el pack de Social Media. Incluye Creación & Personalización de Marca, Community Manager, Social Media Manager, Analista de datos. Posicionamiento de las redes sociales. Facebook & Instagram Ads.</p>
                </div>
            </div>
        </div>
    </div>
    <ButtonService />
</div>
</template>

<script>
import ButtonService from "./ButtonService.vue";
export default {
    components: {
        ButtonService,
    },
};
</script>
