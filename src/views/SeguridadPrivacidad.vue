<script setup lang="ts">
</script>

<template>

    <div class="contenedor">

        <h1>Seguridad y Privacidad</h1>

        <p class="introduccion">
            En EdukiFCA nos comprometemos a proteger la información de nuestros
            usuarios y ofrecer una experiencia segura dentro de nuestra plataforma.
        </p>

        <ol>

            <li>
                <h2>Aceptación de los términos</h2>
                <p>
                    Al utilizar EdukiFCA, el usuario acepta los presentes términos
                    y condiciones. Si no está de acuerdo con alguno de ellos,
                    deberá abstenerse de utilizar la plataforma.
                </p>
            </li>

            <li>
                <h2>Uso de la plataforma</h2>
                <p>
                    EdukiFCA está destinada exclusivamente a fines educativos.
                    El usuario se compromete a utilizar la plataforma de manera
                    responsable y a no realizar actividades que puedan afectar
                    su funcionamiento o perjudicar a otros usuarios.
                </p>
            </li>

            <li>
                <h2>Información del usuario</h2>
                <p>
                    La información proporcionada por el usuario mediante los
                    formularios de la plataforma deberá ser verdadera y estar
                    actualizada. El usuario es responsable de la información
                    que proporcione.
                </p>
            </li>

            <li>
                <h2>Protección de datos</h2>
                <p>
                    EdukiFCA se compromete a utilizar la información proporcionada
                    únicamente para los fines relacionados con los servicios
                    educativos ofrecidos por la plataforma.
                </p>
            </li>

            <li>
                <h2>Seguridad</h2>
                <p>
                    Se implementarán medidas razonables para proteger la
                    información de los usuarios y evitar accesos no autorizados.
                    Sin embargo, ningún sistema conectado a Internet puede
                    garantizar una seguridad absoluta.
                </p>
            </li>

            <li>
                <h2>Contenido educativo</h2>
                <p>
                    Los materiales disponibles en EdukiFCA tienen fines educativos.
                    El usuario se compromete a utilizarlos de manera responsable
                    y respetando los derechos correspondientes sobre los contenidos.
                </p>
            </li>

            <li>
                <h2>Modificaciones</h2>
                <p>
                    EdukiFCA podrá modificar estos términos y condiciones cuando
                    sea necesario. Las modificaciones serán publicadas en esta
                    misma sección.
                </p>
            </li>

            <li>
                <h2>Aceptación final</h2>
                <p>
                    Al continuar utilizando EdukiFCA, el usuario confirma que ha
                    leído, comprendido y aceptado estos términos y condiciones.
                </p>
            </li>

        </ol>

    </div>

</template>

<style scoped>

.contenedor {
    width: 85%;
    max-width: 1100px;
    margin: 110px auto 50px;
    padding: 40px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}

h1 {
    margin-top: 0;
    color: #172B43;
    font-size: 32px;
    text-align: center;
}

.introduccion {
    text-align: center;
    margin-bottom: 35px;
}

ol {
    list-style-position: inside;
    padding-left: 0;
}

li {
    margin-bottom: 25px;
}

li::marker {
    color: #172B43;
    font-weight: bold;
}

h2 {
    display: inline;
    margin: 0;
    color: #172B43;
    font-size: 22px;
}

li p {
    margin: 10px 0 0 0;
    color: #555;
    line-height: 1.7;
}

@media (max-width: 600px) {

    .contenedor {
        width: 90%;
        padding: 25px;
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 20px;
    }

}

</style>