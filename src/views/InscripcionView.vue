<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const nombre = ref('')
const apellidos = ref('')
const correo = ref('')
const confirmarCorreo = ref('')
const telefono = ref('')

const curso = ref(route.query.curso?.toString() || '')
const mensaje = ref('')

function inscribirse() {
    mensaje.value = '¡'+nombre.value+', tu solicitud de inscripción ha sido enviada correctamente!'
}
</script>

<template>

    <div class="contenedor-inscripcion">

        <div class="encabezado">

            <p>EDUKIFCA</p>

            <h1>Inscripción al curso</h1>

            <h2>{{ curso }}</h2>

            <span>
                Completa tus datos para solicitar tu inscripción.
            </span>

        </div>


        <div class="formulario">

            <div class="campo">

                <label>Nombre</label>

                <input
                    v-model="nombre"
                    type="text"
                    placeholder="Escribe tu nombre"
                >

            </div>


            <div class="campo">

                <label>Apellidos</label>

                <input
                    v-model="apellidos"
                    type="text"
                    placeholder="Escribe tus apellidos"
                >

            </div>


            <div class="campo">

                <label>Correo electrónico</label>

                <input
                    v-model="correo"
                    type="email"
                    placeholder="tu@correo.com"
                >

            </div>


            <div class="campo">

                <label>Confirmar correo electrónico</label>

                <input
                    v-model="confirmarCorreo"
                    type="email"
                    placeholder="Confirma tu correo electrónico"
                >

            </div>


            <div class="campo">

                <label>Teléfono</label>

                <input
                    v-model="telefono"
                    type="tel"
                    placeholder="No. de celular"
                >

            </div>


            <div class="curso-seleccionado">

                <span>Curso seleccionado</span>

                <strong>{{ curso }}</strong>

            </div>


            <button @click="inscribirse">
                Confirmar inscripción
            </button>


            <p
                v-if="mensaje"
                class="mensaje"
            >
                {{ mensaje }}
            </p>

        </div>

    </div>

</template>

<style scoped>

.contenedor-inscripcion {
    width: 85%;
    max-width: 750px;
    margin: 100px auto 50px;
}


.encabezado {
    padding: 40px;

    text-align: center;

    background-color: #172B43;
    color: white;

    border-radius: 12px 12px 0 0;
}

.encabezado p {
    margin: 0 0 10px;

    font-size: 13px;
    letter-spacing: 3px;

    color: #FFBE2E;
}

.encabezado h1 {
    margin: 0 0 10px;

    font-size: 32px;
}

.encabezado h2 {
    margin: 0 0 15px;

    font-size: 24px;

    color: #FFBE2E;
}

.encabezado span {
    color: #ccc;
    font-size: 15px;
}

.formulario {
    padding: 35px;

    background-color: white;

    border-radius: 0 0 12px 12px;

    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.10);
}


.campo {
    margin-bottom: 22px;
}

.campo label {
    display: block;

    margin-bottom: 8px;

    color: #444;

    font-weight: bold;
}

.campo input {
    width: 100%;

    padding: 13px;

    box-sizing: border-box;

    border: 1px solid #ccc;
    border-radius: 7px;

    font-size: 15px;

    outline: none;
}

.campo input:focus {
    border-color: #555;
}


.curso-seleccionado {
    margin: 25px 0;

    padding: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #f1f1f1;

    border-radius: 8px;
}

.curso-seleccionado span {
    color: #666;
}

.curso-seleccionado strong {
    color: #333;
}

button {
    width: 100%;

    padding: 14px;

    border: none;
    border-radius: 7px;

    background-color: #F15A38;
    color: white;

    font-size: 16px;

    cursor: pointer;
}

button:hover {
    background-color: #FFBE2E;
    color: #172B43;
}

.mensaje {
    margin-top: 20px;

    padding: 14px;

    text-align: center;

    background-color: #e8f5e9;
    color: #2e7d32;

    border-radius: 7px;

    font-weight: bold;
}

@media (max-width: 600px) {

    .contenedor-inscripcion {
        width: 90%;
    }

    .encabezado {
        padding: 30px 20px;
    }

    .encabezado h1 {
        font-size: 27px;
    }

    .formulario {
        padding: 25px;
    }

    .curso-seleccionado {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }

}

</style>