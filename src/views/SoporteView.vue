<script setup lang="ts">
import { ref } from 'vue';

const nombreSop = ref('')

const correoSop = ref('')

const telSop = ref('')

const asuntoSop = ref('')

const descSop = ref('')


</script>


<template>
    <p>Nombre:</p>
    <input v-model="nombreSop" placeholder="Escribe tu nombre completo">

    <p>Correo:</p>
    <input v-model="correoSop" placeholder="tu@correo.com">

    <p>Teléfono:</p>
    <input v-model="telSop" placeholder="No. de Celular">

    <p>Asunto:</p>
    <input v-model="asuntoSop" placeholder="Escribe el motivo de tu correo">

    <p>Descripción</p>
    <textarea v-model="descSop" placeholder="Describe tu problema a detalle">
    </textarea>
</template>


<style scoped>

</style>