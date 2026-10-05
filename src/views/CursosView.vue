<script setup lang="ts">
import CursosCard from '../components/CursosCard.vue';
import { cursos } from '../constants/cursos';
import { ref } from 'vue';

const cursoSelec = ref('')

function seleccionarCurso(nombre: string){
    cursoSelec.value=nombre
}
</script>


<template>
    <div v-for="curso in cursos" :key="curso.nombre">
        <CursosCard
            :nombre="curso.nombre"
            :descripcion="curso.descripcion"
            :horas="curso.horas"
            :nivel="curso.nivel"
            :precio="curso.precio"
            :video="curso.video"
            @seleccionar="seleccionarCurso"
        />

    </div>
</template>


<style scoped>

</style>