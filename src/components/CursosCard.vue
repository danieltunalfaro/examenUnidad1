<script setup lang="ts">

const Props = defineProps<{
    nombre: string,
    descripcion: string,
    horas: string,
    nivel: string,
    precio: string,
    video: string
}>()

const emit = defineEmits<{
    seleccionar: [nombre: string]
}>()

function seleccionarCurso(){
    emit('seleccionar', Props.nombre)
}

</script>


<template>
    <h1>{{ nombre }}</h1>
    <h4>{{ descripcion }}</h4>
    <h2>{{ horas }}</h2>
    <h2>{{ nivel }}</h2>
    <h2>{{ precio }}</h2>
    <h4>{{ video }}</h4>

    <button @click="seleccionarCurso">Inscribirme</button>
</template>


<style scoped>

</style>