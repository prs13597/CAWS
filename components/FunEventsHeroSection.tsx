'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const FunEventsHeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%)',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              color: 'white',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Fun Events at C.A.W.S.
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Discover the vibrant life at C.A.W.S. through our exciting events, celebrations, and memorable moments that make learning fun and engaging.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FunEventsHeroSection;