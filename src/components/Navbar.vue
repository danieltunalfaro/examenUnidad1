<script setup lang="ts">

</script>


<template>
    <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/Informacion">¿Quiénes somos?</RouterLink>
        <RouterLink to="/Cursos">Cursos</RouterLink>
        <RouterLink to="/Soporte">Soporte</RouterLink>
    </nav>
</template>


<style scoped>
nav{
    display: flex;
    gap: 40px;
    padding: 200 px;
    background-color: #333;
}
</style>