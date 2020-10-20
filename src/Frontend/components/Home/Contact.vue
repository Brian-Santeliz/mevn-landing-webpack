<template>
<div class="site-section mt-3 bg-image2 overlay" style="background-image: url('../image/herocomputer_1.jpg');">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="section-title pt-4 text-white">Contáctanos</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-7 mb-5">
                <form class="p-5 bg-white" @submit.prevent="submitContact">
                    <h2 class="h4 text-black mb-5">¡Únete a nuestro equipo!</h2>

                    <div class="row form-group">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <label class="text-black" for="fname">Nombre</label>
                            <input required type="text" id="fname" class="form-control rounded-0" v-model="Contact.nombre" />
                        </div>
                        <div class="col-md-6">
                            <label class="text-black" for="lname">Apellido</label>
                            <input required type="text" id="lname" class="form-control rounded-0" v-model="Contact.apellido" />
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <label class="text-black" for="email">Email</label>
                            <input required type="email" id="email" class="form-control rounded-0" v-model="Contact.email" />
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <label class="text-black" for="subject">Asunto</label>
                            <input required type="subject" id="subject" class="form-control rounded-0" v-model="Contact.asunto" />
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <label class="text-black" for="message">Mensaje</label>
                            <textarea required name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Cuentanos tus ideas..." v-model="Contact.mensaje"></textarea>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <input required type="submit" value="Enviar Mensaje" class="btn btn-primary mr-2 mb-2" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    data() {
        return {
            Contact: {
                nombre: "",
                apellido: "",
                asunto: "",
                email: "",
                mensaje: "",
            },
        };
    },
    methods: {
        submitContact() {
            axios
                .post("/contact", this.Contact)
                .then((res) => {
                    (this.Contact.nombre = ""),
                    (this.Contact.apellido = ""),
                    (this.Contact.asunto = ""),
                    (this.Contact.email = ""),
                    (this.Contact.mensaje = "");
                    Swal.fire(
                        "Recibido",
                        "Nuestro equipo se pondrá en contacto contigo. Gracias por elegirnos!",
                        "success"
                    );
                })
                .catch(console.log);
        },
    },
};
</script>
