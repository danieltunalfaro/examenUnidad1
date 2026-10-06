<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import logo2 from './assets/logo2.png';
</script>

<template>
    <Navbar/>
    <RouterView/>

    <footer>

        <div class="empresa">
            <h1>EdukiFCA</h1>

            <br>

            <img :src="logo2" alt="EdukiFCA" class="logo-footer">
        </div>

         <div class="seguridad">
            <RouterLink to="/SeguridadPrivacidad">
                Seguridad y Privacidad
            </RouterLink>
        </div>

        <div class="contactos">
            <h3>Contactos</h3>

            <ul>
                <li>C.64A x 79 y 81 Centro</li>
                <li>+52 9999 48 53 66</li>
                <li>edukiFCA@gmail.com</li>
                <li>Horario: Lunes a Viernes (8:00 AM - 5:00 PM)</li>
            </ul>
        </div>

    </footer>
</template>

<style scoped>

:global(html),
:global(body),
:global(#app) {
    width: 100%;
    margin: 0;
    padding: 0;
}

footer {
    width: 100vw;
    min-height: 180px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 60px;
    box-sizing: border-box;

    background-color: #172B43;
    color: white;
}

.empresa {
    text-align: left;
}

.empresa h1 {
    margin: 0;
    color: #FFBE2E;
}

.logo-footer {
    width: 130px;
    height: auto;
    object-fit: contain;
}

.seguridad {
    text-align: center;
}

.seguridad a {
    color: #FFBE2E;
    text-decoration: none;
    font-weight: bold;
}

.seguridad a:hover {
    text-decoration: underline;
}

.contactos {
    text-align: right;
}

.contactos h3 {
    margin: 0 0 10px;
    color: #FFBE2E;
}

.contactos ul {
    margin: 0;
    padding-left: 20px;
    list-style-position: inside;
}

.contactos li {
    margin-bottom: 5px;
}

@media (max-width: 600px) {

    footer {
        flex-direction: column;
        gap: 25px;
        text-align: center;
    }

    .empresa,
    .contactos {
        text-align: center;
    }

    .contactos ul {
        text-align: left;
    }

}

</style>