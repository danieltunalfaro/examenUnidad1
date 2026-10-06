```vue
<script setup lang="ts">
import { ref } from 'vue';

const nombreSop = ref('')
const correoSop = ref('')
const telSop = ref('')
const asuntoSop = ref('')
const descSop = ref('')

const mensaje = ref('')

function enviarSolicitud() {
    mensaje.value = 'Solicitud enviada correctamente'
}
</script>

<template>

    <div class="soporte">

        <div class="encabezado">
            <h1>Centro de Soporte</h1>

            <br>

            <p>
                ¿Tienes alguna duda o problema? Completa el siguiente
                formulario y nos pondremos en contacto contigo.
            </p>
        </div>


        <div class="formulario">

            <div class="campo">
                <label>Nombre completo</label>

                <input
                    v-model="nombreSop"
                    type="text"
                    placeholder="Escribe tu nombre completo"
                >
            </div>


            <div class="campo">
                <label>Correo electrónico</label>

                <input
                    v-model="correoSop"
                    type="email"
                    placeholder="tu@correo.com"
                >
            </div>


            <div class="campo">
                <label>Teléfono</label>

                <input
                    v-model="telSop"
                    type="tel"
                    placeholder="No. de celular"
                >
            </div>


            <div class="campo">
                <label>Asunto</label>

                <input
                    v-model="asuntoSop"
                    type="text"
                    placeholder="Escribe el motivo de tu consulta"
                >
            </div>


            <div class="campo">
                <label>Descripción</label>

                <textarea
                    v-model="descSop"
                    placeholder="Describe tu problema o duda a detalle"
                ></textarea>
            </div>


            <button @click="enviarSolicitud">
                Enviar solicitud
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

.soporte { 
    width: 85%; 
    max-width: 800px; 
    margin: 100px auto 50px; 
}


.encabezado {
    text-align: center;
    margin-bottom: 30px;
}

.encabezado h1 {
    color: #172B43;
    margin-bottom: 10px;
}

.encabezado p {
    color: #172B43;
    line-height: 1.6;
}

.formulario {
    background-color: white;
    padding: 35px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.10);
}

.campo {
    margin-bottom: 20px;
}

.campo label {
    display: block;
    margin-bottom: 7px;
    font-weight: bold;
    color: #444;
}

.campo input,
.campo textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 7px;
    font-size: 15px;
    outline: none;
    font-family: Arial, sans-serif;
}

.campo textarea {
    height: 140px;
    resize: vertical;
}

.campo input:focus,
.campo textarea:focus {
    border-color: #555;
}

button {
    width: 100%;
    padding: 13px;
    margin-top: 5px;
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
    padding: 12px;
    text-align: center;
    background-color: #FEF6E3;
    color: #008DA1;
    border: 1px solid #FFBE2E;
    border-radius: 7px;
    font-weight: bold;
}

@media (max-width: 600px) {

    .soporte {
        width: 90%;
    }

    .formulario {
        padding: 25px;
    }

}

</style>
