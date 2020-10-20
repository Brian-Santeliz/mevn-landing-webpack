<template>
<div class="site-section bg-light">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center" style="margin-top:7rem;">
                <h2 class="section-title mb-3">¿Quiénes Somos?</h2>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-lg-6">
                <img src="../../public/image/about.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 ml-auto pl-lg-5">
                <h2 class="text-black mb-4 h3 font-weight-bold">Nuestra Misión</h2>
                <p class="mb-4">En Evolution nuestro objetivo es ayudarte al crecimiento digital de tu marca, aprovechando todo el beneficio de las social networks. Para ello implementamos una serie de estrategias:</p>
                <ul class="ul-check mb-5 list-unstyled success">
                    <li>Inboud & Email Marketing</li>
                    <li>Web Development</li>
                    <li>Análisis de datos</li>
                    <li>Diseño Gráfico</li>
                    <li>SEO/SEM</li>
                </ul>
                <ButtonAbout />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ButtonAbout from "./ButtonAbout.vue";
export default {
    components: {
        ButtonAbout,
    },
};
</script>
