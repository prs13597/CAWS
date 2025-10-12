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
                C.A.W.S.
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
            Crack Aptitude with Sarika (C.A.W.S.) – Empowering Dreams, Simplifying Success
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
            At C.A.W.S., we believe that aptitude should never be a barrier to ambition. Founded with the vision to redefine competitive exam preparation, our mission is simple yet powerful: to make aptitude learning easier, smarter, and more effective for every student.
            <br /><br />
            With expert-led guidance, innovative teaching methods, and simplified approaches, we transform complex concepts into clear, easy-to-grasp strategies. For many of aspirants, C.A.W.S. has been more than just an institute—it's been a trusted partner in turning potential into performance, and dreams into achievements.
            <br /><br />
            Because at Crack Aptitude with Sarika, excellence isn't just taught—it's inspired.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;