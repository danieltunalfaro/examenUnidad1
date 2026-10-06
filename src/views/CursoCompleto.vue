<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { cursos } from '../constants/cursos'

const route = useRoute()
const router = useRouter()

const nombreCurso = ref(route.query.curso?.toString() || '')

function inscribirse() {
    router.push({
        path: '/Inscripcion',
        query: {
            curso: nombreCurso.value
        }
    })
}
</script>

<template>

    <div class="contenedor-detalle">

        <div v-for="curso in cursos" :key="curso.nombre">

            <div v-if="curso.nombre === nombreCurso">


                <div class="encabezado">

                    <p class="categoria">
                        CURSO EDUCATIVO
                    </p>

                    <h1>{{ curso.nombre }}</h1>

                    <p class="descripcion-corta">
                        {{ curso.descripcion }}
                    </p>

                </div>

                <div class="informacion">

                    <div class="dato">
                        <span>Duración</span>
                        <strong>{{ curso.horas }} horas</strong>
                    </div>

                    <div class="dato">
                        <span>Nivel</span>
                        <strong>{{ curso.nivel }}</strong>
                    </div>

                    <div class="dato">
                        <span>Precio</span>
                        <strong>${{ curso.precio }}</strong>
                    </div>

                </div>

                <div class="contenido">

                    <div class="descripcion">

                        <h2>Acerca del curso</h2>

                        <p>
                            {{ curso.desc_larga }}
                        </p>

                    </div>


                    <div class="recurso">

                        <h2>Material audiovisual</h2>

                        <p>
                            Complementa tu aprendizaje con el siguiente
                            material audiovisual.
                        </p>

                        <div class="video">
                            <iframe
                                :src="curso.video"
                                title="Video del curso"
                                allowfullscreen
                            ></iframe>
                        </div>

                    </div>

                    <div class="recurso">

                        <h2>Material de apoyo</h2>

                        <p>
                            Consulta material adicional para reforzar los
                            conocimientos adquiridos durante el curso.
                        </p>

                        <a :href="curso.biblio"  target="_blank"
                            class="boton-recurso">
                            Consultar bibliografía
                        </a>

                    </div>

                </div>

                <div class="inscripcion">

                    <h2>¿Quieres comenzar este curso?</h2>

                    <p>
                        Inscríbete y comienza a desarrollar nuevas
                        habilidades.
                    </p>

                    <button @click="inscribirse">
                        Inscribirme
                    </button>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

.contenedor-detalle {
    width: 85%;
    max-width: 1000px;
    margin: 100px auto 50px;
}

.encabezado {
    padding: 45px;
    background-color: #172B43;
    color: white;
    border-radius: 12px 12px 0 0;
}

.categoria {
    margin: 0 0 10px;
    font-size: 13px;
    letter-spacing: 2px;
    color: #FFBE2E;
}

.encabezado h1 {
    margin: 0 0 15px;
    font-size: 40px;
}

.descripcion-corta {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: #ddd;
}

.informacion {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    background-color: white;

    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}

.dato {
    padding: 25px;
    text-align: center;
    border-right: 1px solid #ddd;
}

.dato:last-child {
    border-right: none;
}

.dato span {
    display: block;
    margin-bottom: 8px;

    font-size: 14px;
    color: #777;
}

.dato strong {
    font-size: 18px;
    color: #333;
}

.contenido {
    margin-top: 30px;
}

.descripcion,
.recurso {
    margin-bottom: 25px;
    padding: 30px;

    background-color: white;

    border-radius: 10px;

    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

.descripcion h2,
.recurso h2 {
    margin-top: 0;
    color: #333;
}

.descripcion p,
.recurso p {
    color: #555;
    line-height: 1.7;
}

.boton-recurso {
    display: inline-block;

    margin-top: 10px;
    padding: 11px 20px;

    background-color: #008DA1;
    color: white;

    text-decoration: none;

    border-radius: 6px;
}

.boton-recurso:hover {
    background-color: #172B43;
}

.inscripcion {
    margin-top: 30px;
    padding: 35px;

    text-align: center;

    background-color: white;

    border-radius: 10px;
}

.inscripcion h2 {
    margin-top: 0;
    color: #333;
}

.inscripcion p {
    color: #666;
}

.inscripcion button {
    margin-top: 10px;

    padding: 13px 35px;

    border: none;
    border-radius: 7px;

    background-color: #F15A38;
    color: white;

    font-size: 16px;

    cursor: pointer;
}

.inscripcion button:hover {
    background-color: #FFBE2E;
    color: #172B43;
}

.video {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 20px;
}

.video iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
}

@media (max-width: 700px) {

    .contenedor-detalle {
        width: 90%;
    }

    .encabezado {
        padding: 30px;
    }

    .encabezado h1 {
        font-size: 30px;
    }

    .informacion {
        grid-template-columns: 1fr;
    }

    .dato {
        border-right: none;
        border-bottom: 1px solid #ddd;
    }

    .dato:last-child {
        border-bottom: none;
    }

}
</style>