'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutHeroSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 4,
              color: '#1f2937',
            }}
          >
            About{' '}
            <Box component="span" sx={{ display: 'inline-block' }}>
              <Typography
                component="span"
                sx={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  background: 'linear-gradient(45deg, #3b82f6, #10b981, #f59e0b)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                C.A.W.S
              </Typography>
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              mb: 6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 'medium',
            }}
          >
            Crack Aptitude with Sarika - Empowering dreams through excellence in education
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: '#4b5563',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            Founded with a vision to transform the landscape of competitive exam preparation, C.A.W.S has
            been a beacon of hope for thousands of aspirants. Our institute stands for "Crack Aptitude with
            Sarika," representing our commitment to personalized, expert-led coaching that turns potential
            into performance.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;