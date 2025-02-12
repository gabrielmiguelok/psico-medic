'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Íconos más afines a servicios para mascotas
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function ServicesSection() {
  const theme = useTheme();

  const servicesData = [
    {
      icon: <PsychologyIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Terapia Conductual',
      description:
        'Abordamos problemas de agresividad, ansiedad, miedos y estrés en mascotas a través de terapias especializadas.',
    },
    {
      icon: <SpaIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Técnicas de Relajación',
      description:
        'Sesiones basadas en musicoterapia y aromaterapia para mantener a tus mascotas en un estado de calma y bienestar.',
    },
    {
      icon: <HealingIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Rehabilitación Emocional',
      description:
        'Planificamos la recuperación de mascotas que han sufrido traumas o experiencias negativas para devolverles su confianza.',
    },
    {
      icon: <PetsIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'Entrenamiento Psicológico',
      description:
        'Diferente al entrenamiento convencional, nos enfocamos en ejercicios que refuerzan la relación y el equilibrio mental.',
    },
  ];

  return (
    <Box
      component="section"
      id="services-section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)',
        zIndex: 1,
      }}
    >
      {/* Curva superior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%' }}>
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ fill: '#E0F7FA' }}
          />
        </svg>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          Nuestros Servicios
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            mb: 6,
            color: theme.palette.text.secondary,
            fontSize: '1.1rem',
          }}
        >
          Ayudamos a tus mascotas a superar los desafíos mentales y emocionales más
          comunes, para que gocen de una vida feliz y equilibrada.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {servicesData.map((service, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Curva inferior */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: -1,
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%' }}>
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ fill: '#E0F7FA' }}
          />
        </svg>
      </Box>
    </Box>
  );
}
