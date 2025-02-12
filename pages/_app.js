import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PetPsyCare - Psicología para Mascotas</title>
        <meta
          name="description"
          content="Agencia especializada en psicología y terapia para mascotas. Brindamos soluciones para el bienestar mental de tus animales."
        />
        <meta
          name="keywords"
          content="psicología para mascotas, terapia animal, ansiedad canina, cuidado felino, bienestar animal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="PetPsyCare - Psicología para Mascotas" />
        <meta
          property="og:description"
          content="Mejora el bienestar emocional de tus mascotas con nuestros servicios profesionales de psicología animal."
        />
        <meta property="og:image" content="/muestra.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PetPsyCare - Psicología para Mascotas" />
        <meta
          name="twitter:description"
          content="Mejora el bienestar emocional de tus mascotas con nuestros servicios profesionales de psicología animal."
        />
        <meta name="twitter:image" content="/muestra.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
