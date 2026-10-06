<script setup lang="ts">
</script>

<template>

    <section class="descripcion-compania">

        <h1>¿Quiénes somos?</h1>

        <p>
            En <strong>EdukiFCA</strong> somos una plataforma educativa
            enfocada en brindar cursos de aprendizaje accesibles y de calidad.
            Nuestro objetivo es ayudar a estudiantes y profesionales a
            desarrollar nuevos conocimientos y habilidades que puedan aplicar
            tanto en su formación académica como en el ámbito laboral.
        </p>

        <p>
            Contamos con cursos de diferentes áreas, diseñados para distintos
            niveles de conocimiento. Buscamos ofrecer una experiencia de
            aprendizaje sencilla, práctica y accesible para todas aquellas
            personas interesadas en continuar desarrollándose.
        </p>

    </section>


    <section class="certificaciones">

        <h2>Certificaciones</h2>

        <p>
            Nuestros cursos están diseñados tomando como referencia buenas
            prácticas y conocimientos utilizados en el ámbito educativo y
            profesional. Algunas organizaciones reconocidas que cuentan con
            programas de certificación relacionados con nuestras áreas de
            formación son:
        </p>

        <div class="contenedor-certificaciones">

            <div class="certificacion">
                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2020/09/Microsoft-Logo-650x366.png" alt="Microsoft">
                </div>

                <h3>Microsoft</h3>

                <p>
                    Cuenta con certificaciones relacionadas con tecnología,
                    programación, administración de sistemas y servicios
                    en la nube.
                </p>
            </div>


            <div class="certificacion">
                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2021/08/Cisco-Logo-650x366.png" alt="Cisco">
                </div>

                <h3>Cisco</h3>

                <p>
                    Ofrece certificaciones enfocadas principalmente en redes,
                    infraestructura y tecnologías de la información.
                </p>
            </div>


            <div class="certificacion">
                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2020/09/Google-Logo-650x366.png" alt="Google">
                </div>

                <h3>Google</h3>

                <p>
                    Cuenta con certificados profesionales relacionados con
                    análisis de datos, tecnología, marketing digital y otras
                    áreas.
                </p>
            </div>


            <div class="certificacion">
                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="AWS">
                </div>

                <h3>Amazon Web Services</h3>

                <p>
                    Ofrece certificaciones relacionadas con servicios en la
                    nube, infraestructura y administración de sistemas.
                </p>
            </div>

        </div>

    </section>


    <section class="empresas">

        <h2>Empresas relacionadas</h2>

        <p>
            Los conocimientos adquiridos mediante nuestros cursos pueden ser
            aplicados en diferentes sectores y empresas. Algunas organizaciones
            reconocidas que están afiliadas a nuestra empresa son:
        </p>

        <div class="contenedor-empresas">

            <div class="empresa">

                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2020/09/IBM-Logo-650x366.png" alt="IBM">
                </div>

                <h3>IBM México</h3>

                <p>
                    Tecnología, desarrollo de software, datos y servicios
                    empresariales.
                </p>

            </div>


            <div class="empresa">

                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2020/09/Microsoft-Logo-650x366.png" alt="Microsoft">
                </div>

                <h3>Microsoft México</h3>

                <p>
                    Desarrollo de software, servicios en la nube y soluciones
                    empresariales.
                </p>

            </div>


            <div class="empresa">

                <div class="espacio-logo">
                    <img src="https://logos-marcas.com/wp-content/uploads/2021/03/BBVA-Logo-650x366.png" alt="BBVA">
                </div>

                <h3>BBVA México</h3>

                <p>
                    Tecnología financiera, análisis de datos y desarrollo
                    de soluciones digitales.
                </p>

            </div>

        </div>

    </section>

</template>


<style scoped>

section {
    width: 85%;
    max-width: 1100px;
    margin: 100px auto 40px;
    padding: 35px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
    box-sizing: border-box;
}

h1,
h2 {
    color: #172B43;
}

h1 {
    margin-top: 0;
    font-size: 32px;
}

h2 {
    margin-top: 0;
    font-size: 27px;
}

p {
    color: #555;
    line-height: 1.7;
}

.contenedor-certificaciones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.certificacion {
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: transform 0.2s;
}

.certificacion:hover {
    transform: translateY(-5px);
}

.certificacion h3 {
    color: #172B43;
}

.espacio-logo {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #172B43;
    color: #FFBE2E;

    border-radius: 8px;
    margin-bottom: 15px;

    font-size: 20px;
    font-weight: bold;

}

.espacio-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
.empresas {
    margin-top: 40px;
}

.contenedor-empresas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.empresa {
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: transform 0.2s;
}

.empresa:hover {
    transform: translateY(-5px);
}

.empresa .espacio-logo {
    height: 80px;
    background-color: #FEF6E3;
    color: #172B43;
    border: 2px solid #FFBE2E;
}

.empresa h3 {
    color: #172B43;
}


@media (max-width: 900px) {

    .contenedor-certificaciones {
        grid-template-columns: repeat(2, 1fr);
    }

    .contenedor-empresas {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 600px) {

    section {
        width: 90%;
        padding: 25px;
    }

    .contenedor-certificaciones {
        grid-template-columns: 1fr;
    }

    .contenedor-empresas {
        grid-template-columns: 1fr;
    }

}

</style>