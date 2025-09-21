'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const CoursesHeroSection = () => {
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
            Our{' '}
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
                Courses
              </Typography>
            </Box>
          </Typography>

          {/* Main Description */}
          <Typography
            sx={{
              color: '#6b7280',
              mb: 6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 'medium',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Comprehensive coaching programs designed to help you excel in competitive examinations
          </Typography>

          {/* Secondary Description */}
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
            From banking and SSC to UPSC and defence services, our expertly crafted courses provide you
            with the knowledge, practice, and confidence needed to succeed.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CoursesHeroSection;