'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const VisionHeroSection = () => {
  return (
    <Box
      sx={{
        py: 15,
        background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%)',
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
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 4,
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Our Vision for the Future
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 'medium',
              maxWidth: '700px',
              mx: 'auto',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Shaping tomorrow's leaders through transformative education today
          </Typography>

          {/* Main Vision Statement */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            At C.A.W.S, we envision a future where every aspiring candidate has access to world-class
            education and personalized mentorship to achieve their dreams and contribute meaningfully to
            society.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionHeroSection;