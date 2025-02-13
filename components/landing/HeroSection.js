'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Íconos
import PetsIcon from '@mui/icons-material/Pets';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SearchIcon from '@mui/icons-material/Search';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

const translations = {
  es: {
    hero: {
      title1: [
        { text: 'Mejora ', color: 'primary' },
        { text: 'la salud emocional ', color: 'secondary' },
        { text: 'de tus mascotas con ', color: 'black' },
        { text: 'PetPsyCare', color: 'primary' },
      ],
      subtitle1:
        'Creamos planes de terapia y asesoría para ayudarte a entender y manejar el comportamiento de tus animales de compañía.',
      button1: 'Reservar Sesión',
      button2: 'Ver Presentación',
      featuresTitle: '¿Por qué elegirnos?',
      features: [
        {
          icon: (
            <PsychologyAltIcon
              color="primary"
              fontSize="large"
              titleAccess="Ícono de Psicología"
              aria-hidden="true"
            />
          ),
          title: 'Terapias Personalizadas',
          description:
            'Diseñamos sesiones enfocadas en la necesidad específica de cada mascota para lograr mejores resultados.',
        },
        {
          icon: (
            <SearchIcon
              color="primary"
              fontSize="large"
              titleAccess="Ícono de Análisis"
              aria-hidden="true"
            />
          ),
          title: 'Análisis de Conducta',
          description:
            'Investigamos las causas del comportamiento, de manera que la terapia sea efectiva y duradera.',
        },
        {
          icon: (
            <Diversity1Icon
              color="primary"
              fontSize="large"
              titleAccess="Ícono de Comunidad"
              aria-hidden="true"
            />
          ),
          title: 'Comunidad de Apoyo',
          description:
            'Te acompañamos durante todo el proceso y te conectamos con profesionales y otros cuidadores.',
        },
      ],
    },
  },
};

/**
 * Componente para mostrar el video con fallback de ícono
 * si no se encuentra el archivo hero.mp4.
 */
function HeroVideo() {
  const [videoError, setVideoError] = useState(false);

  // Maneja el error de carga del video
  const handleVideoError = () => {
    setVideoError(true);
  };

  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  // Si falla la carga del video, mostramos el ícono de mascota.
  if (videoError) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: { xs: '300px', sm: '400px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
        }}
      >
        <PetsIcon sx={{ fontSize: 100, color: '#ccc' }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: '100%',
        ...(isVerySmall && {
          maxWidth: '100%',
        }),
      }}
    >
      <Box
        component="video"
        src="/hero.mp4"
        poster="/pet-therapy-poster.png"
        onError={handleVideoError}
        controls
        playsInline
        aria-label="Video de introducción a PetPsyCare"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      />
    </Box>
  );
}

/**
 * Ítem individual para cada característica (tarjeta).
 */
function FeatureItem({ icon, title, description }) {
  return (
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          textAlign: 'center',
          p: 3,
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0px 8px 30px rgba(0,0,0,0.15)',
          },
        }}
      >
        <Box sx={{ mb: 2 }}>{icon}</Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}

/**
 * Sección principal (Hero) de PetPsyCare.
 */
export default function HeroSection({ language = 'es' }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const t = translations[language]?.hero || translations.es.hero;

  const handleReservarSesion = () => {
    const contactSection = document.getElementById('footer-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemo = () => {
    const videoSection = document.getElementById('hero-video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderParts = (titleParts) =>
    titleParts.map((part, idx) => {
      let colorStyle;
      switch (part.color) {
        case 'primary':
          colorStyle = theme.palette.primary.main;
          break;
        case 'secondary':
          colorStyle = theme.palette.secondary.main;
          break;
        default:
          colorStyle = theme.palette.text.primary;
          break;
      }
      return (
        <span key={idx} style={{ color: colorStyle, fontWeight: 'bold' }}>
          {part.text}
        </span>
      );
    });

  const sharedButtonStyle = {
    textTransform: 'none',
    borderRadius: '30px',
    fontWeight: 600,
    px: 5,
    py: 1.5,
    fontSize: { xs: '1rem', sm: '1.1rem' },
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    },
  };

  // Botón primario con gradiente.
  const heroPrimaryButtonStyle = {
    ...sharedButtonStyle,
    background: 'linear-gradient(135deg, #009688 0%, #80CBC4 100%)',
    color: '#ffffff',
  };

  // Botón secundario con borde y color principal de la paleta.
  const heroSecondaryButtonStyle = {
    ...sharedButtonStyle,
    backgroundColor: '#ffffff',
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: '#E0F7FA',
    },
  };

  return (
    <Box
      component="section"
      id="hero-section"
      role="banner"
      aria-label="Sección principal de PetPsyCare, agencia de psicología para mascotas"
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Curva superior (decorativo) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
        >
          <path
            fill="#E0F7FA"
            d="M0,128L30,160C60,192,120,256,180,250.7C240,245,300,171,360,138.7C420,107,480,117,540,144C600,171,660,213,720,240C780,267,840,277,900,256C960,235,1020,181,1080,165.3C1140,149,1200,171,1260,170.7C1320,171,1380,149,1410,138.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </svg>
      </Box>

      {/* ------ CONTENIDO PRINCIPAL ------ */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{ minHeight: { md: '60vh' } }}
        >
          {/* Texto */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                  color: theme.palette.text.primary,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                {renderParts(t.title1)}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  color: theme.palette.text.secondary,
                  mb: 4,
                }}
              >
                {t.subtitle1}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: isMobile ? 'column' : 'row',
                }}
              >
                <Button
                  onClick={handleReservarSesion}
                  aria-label={t.button1}
                  sx={heroPrimaryButtonStyle}
                  startIcon={<PetsIcon />}
                >
                  {t.button1}
                </Button>

                <Button
                  onClick={handleDemo}
                  aria-label={t.button2}
                  sx={heroSecondaryButtonStyle}
                  startIcon={<PlayCircleOutlineIcon />}
                >
                  {t.button2}
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Video */}
          <Grid item xs={12} md={6} id="hero-video-section">
            <HeroVideo />
          </Grid>
        </Grid>

        {/* Sección de características */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4,
              color: theme.palette.text.primary,
            }}
          >
            {t.featuresTitle}
          </Typography>
          <Grid container spacing={4}>
            {t.features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      {/* ------ FIN CONTENIDO PRINCIPAL ------ */}

      {/* Curva inferior (decorativo) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
        >
          <path
            fill="#E0F7FA"
            d="M0,192L30,165.3C60,139,120,85,180,101.3C240,117,300,203,360,224C420,245,480,203,540,170.7C600,139,660,117,720,122.7C780,128,840,160,900,192C960,224,1020,256,1080,256C1140,256,1200,224,1260,208C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </Box>
    </Box>
  );
}
