<script setup lang="ts">
import fondo from '../assets/fondo.jpg'
</script>

<template>

    <div class="contenedor-inicio">

        <section class="imagen-fondo"
        :style="{ backgroundImage: `url(${fondo})` }">

            <div class="texto-bienvenida">
                <h1>Bienvenido a EdukiFCA</h1>

                <p>
                    Aprende, desarrolla nuevas habilidades y alcanza tus objetivos
                    con nuestros cursos.
                </p>
            </div>

        </section>


    <section class="casos-exito">
        <h2>Casos de éxito</h2>

        <p>
            Conoce las experiencias de algunos de nuestros estudiantes y los
            resultados que han obtenido gracias a su formación en EdukiFCA.
        </p>

        <div class="contenedor-casos">

            <div class="caso">
                <h3>Mariana López</h3>
                <p class="curso">Curso de Inglés</p>

                <p>
                    "Gracias al curso de Inglés pude mejorar mi vocabulario y
                    comprender mejor las conversaciones. Ahora me siento mucho
                    más segura al comunicarme en este idioma."
                </p>

                <p class="trabajo">
                    <strong>Actualmente:</strong> Trabaja como asistente administrativa en
                    <strong>Grupo Bimbo</strong>.
                </p>
            </div>

            <div class="caso">
                <h3>Carlos Méndez</h3>
                <p class="curso">Curso de Programación</p>

                <p>
                    "Comencé sin tener conocimientos de programación y el curso
                    me ayudó a comprender los conceptos básicos. Actualmente
                    puedo desarrollar mis propios programas."
                </p>

                <p class="trabajo">
                    <strong>Actualmente:</strong> Trabaja como desarrollador junior en
                    <strong>Softtek</strong>.
                </p>
            </div>

            <div class="caso">
                <h3>Andrea Hernández</h3>
                <p class="curso">Curso de Base de datos</p>

                <p>
                    "El curso me ayudó a entender cómo diseñar y administrar una
                    base de datos. Los conocimientos adquiridos me han servido
                    para mejorar mis proyectos escolares."
                </p>

                <p class="trabajo">
                    <strong>Actualmente:</strong> Trabaja como analista de datos en
                    <strong>BBVA México</strong>.
                </p>
            </div>

        </div>
    </section>

    </div>

</template>

<style scoped>

.contenedor-inicio {
    width: 85%;
    max-width: 1100px;
    margin: 100px auto 50px;
}

.imagen-fondo {
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-size: cover;
    background-position: center;

    border-radius: 12px;
    overflow: hidden;
}

.texto-bienvenida {
    width: 70%;
    padding: 30px;

    text-align: center;

    background-color: rgba(0, 0, 0, 0.6);
    color: white;

    border-radius: 10px;
}

.texto-bienvenida h1 {
    margin: 0 0 15px;
    font-size: 36px;
}

.texto-bienvenida p {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
}

.casos-exito {
    margin-top: 40px;
    padding: 35px;

    background-color: white;

    border-radius: 12px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);

    text-align: center;
}

.casos-exito h2 {
    margin-bottom: 10px;
    color: #333;
}

.casos-exito > p {
    color: #666;
}

.contenedor-casos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 30px;
}

.caso {
    padding: 25px;
    background-color: #f8f8f8;
    border-radius: 10px;
    border-left: 5px solid #FFBE2E;
}

.caso h3 {
    margin: 0 0 5px;
    color: #172B43;
}

.caso .curso {
    margin: 0 0 15px;
    color: #008DA1;
    font-weight: bold;
}

.caso p {
    color: #555;
    line-height: 1.6;
}

.trabajo {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #ddd;
    color: #172B43 !important;
}

@media (max-width: 700px) {
    .contenedor-casos {
        grid-template-columns: 1fr;
    }
}

</style>