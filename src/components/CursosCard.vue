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

    <div class="tarjeta">

        <div class="encabezado">
            <h2>{{ nombre }}</h2>
        </div>

        <div class="contenido">

            <p class="descripcion">
                {{ descripcion }}
            </p>

            <div class="informacion">

                <p>
                    <strong>Duración:</strong>
                    {{ horas }}
                </p>

                <p>
                    <strong>Nivel:</strong>
                    {{ nivel }}
                </p>

                <p>
                    <strong>Precio:</strong>
                    ${{ precio }}
                </p>

            </div>

            <button @click="seleccionarCurso">
                Ver curso
            </button>

        </div>

    </div>

</template>


<style scoped>

.tarjeta {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

    transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
}

.encabezado {
    background-color: #172B43;
    color: white;
    padding: 20px;
}

.encabezado h2 {
    margin: 0;
}

.contenido {
    padding: 20px;
}

.descripcion {
    color: #555;
    min-height: 50px;
}

.informacion {
    margin-top: 20px;
    margin-bottom: 20px;
}

.informacion p {
    margin: 8px 0;
}

button {
    width: 100%;
    padding: 12px;

    border: none;
    border-radius: 6px;

    background-color: #F15A38;
    color: white;

    cursor: pointer;
    font-size: 15px;
}

button:hover {
    background-color: #FFBE2E;
    color: #172B43;
}

</style>