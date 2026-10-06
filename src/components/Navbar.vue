<script setup lang="ts">
import logo2 from '../assets/logo2.png'
</script>

<template>

    <header>

        <img :src="logo2" alt="logo" class="logo">

        <nav>
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/Informacion">¿Quiénes somos?</RouterLink>
            <RouterLink to="/Cursos">Cursos</RouterLink>
            <RouterLink to="/Soporte">Soporte</RouterLink>
        </nav>

    </header>

</template>

<style scoped>

header {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;
    box-sizing: border-box;

    background-color: #172B43;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;
}

h1 {
    color: #FFBE2E;
    margin: 0;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    color: #FFBE2E;
}

.logo {
    height: 60px;
    width: auto;
    object-fit: contain;
}

</style>