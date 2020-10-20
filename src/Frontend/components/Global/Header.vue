<template>
<div>
    <nav class="site-navbar navbar navbar-expand-lg navbar-light p-3">
        <div class="container" style="display:flex; justify-content:space-between">
            <router-link class="navbar-brand" to="/">Evolution</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto site-block-tab">
                    <router-link class="nav-link router" to="/">
                        Inicio
                        <span class="sr-only">(current)</span>
                    </router-link>
                    <router-link class="nav-link router" to="/services">Servicios</router-link>
                    <router-link class="nav-link router" to="/about">Acerca</router-link>
                    <router-link class="nav-link router" to="/testimonials" tabindex="-1" aria-disabled="true">Testimonios</router-link>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>
