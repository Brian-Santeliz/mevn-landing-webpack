<template>
<div>
    <Header />
    <router-view />
    <Footer />
</div>
</template>

<script>
import Footer from "./components/Global/Footer.vue";
import Header from "./components/Global/Header.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>
