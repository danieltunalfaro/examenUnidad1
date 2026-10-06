<script setup lang="ts">
import { useRouter } from 'vue-router';
import CursosCard from '../components/CursosCard.vue';
import { cursos } from '../constants/cursos';
import { ref } from 'vue';

const router = useRouter()

const filtro = ref('todos');

function seleccionarCurso(nombre: string){
    router.push({
        path: '/DetalleCurso',
        query: {
            curso: nombre
        }
    })
}
</script>


<template>

    <div class="contenedor-cursos">

        <div class="botones-filtro">

            <button @click="filtro = 'todos'">
                Todos los cursos
            </button>

            <button @click="filtro = 'vendidos'">
                Más vendidos
            </button>

        </div>
        
        <div class="lista-cursos">

            <template v-for="curso in cursos" :key="curso.nombre">

                <CursosCard
                    v-if="filtro === 'todos' || curso.demanda === 'alta'"
                    :nombre="curso.nombre"
                    :descripcion="curso.descripcion"
                    :horas="curso.horas"
                    :nivel="curso.nivel"
                    :precio="curso.precio"
                    :video="curso.video"
                    @seleccionar="seleccionarCurso"
                />

            </template>
        </div>

    </div>

</template>


<style scoped>

.contenedor-cursos {
    width: 90%;
    max-width: 1200px;
    margin: 100px auto 40px;
}

.botones-filtro {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.botones-filtro button {
    padding: 12px 25px;
    border: none;
    border-radius: 6px;
    background-color: #172B43;
    color: white;
    cursor: pointer;
    font-size: 15px;
}

.botones-filtro button:hover {
    background-color: #FFBE2E;
    color: #172B43;
}

.lista-cursos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

@media (min-width: 801px) and (max-width: 1000px) {
    .lista-cursos {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 800px) {
    .lista-cursos {
        grid-template-columns: 1fr;
    }
}

</style>