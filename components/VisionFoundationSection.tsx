'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Visibility, TrackChanges, Favorite } from '@mui/icons-material';

const VisionFoundationSection = () => {
  const foundations = [
    {
      icon: <Visibility sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Clear Vision',
      description: 'To be the leading coaching institute that transforms dreams into achievements through innovative education and personalized mentorship.',
      iconBg: '#dbeafe',
    },
    {
      icon: <TrackChanges sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Focused Mission',
      description: 'Empowering every student with knowledge, skills, and confidence to excel in competitive examinations and achieve career success.',
      iconBg: '#dbeafe',
    },
    {
      icon: <Favorite sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Core Values',
      description: 'Excellence, integrity, innovation, and student-centric approach drive every decision we make at C.A.W.S.',
      iconBg: '#dbeafe',
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 3,
            }}
          >
            Foundation of Our Vision
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#6b7280',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            The principles that guide our journey towards educational excellence
          </Typography>
        </Box>

        {/* Foundations Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 6,
          }}
        >
          {foundations.map((foundation, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 6,
                borderRadius: '20px',
                backgroundColor: '#f8fafc',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: foundation.iconBg,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                {foundation.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#1f2937',
                  mb: 3,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                {foundation.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: '#6b7280',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                {foundation.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default VisionFoundationSection;