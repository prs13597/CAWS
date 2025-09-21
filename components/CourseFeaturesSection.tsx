'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { MenuBook, Person, Quiz, Help } from '@mui/icons-material';

const CourseFeaturesSection = () => {
  const features = [
    {
      icon: <MenuBook sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Comprehensive Study Material',
      iconBg: '#dbeafe',
    },
    {
      icon: <Person sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Expert Faculty Guidance',
      iconBg: '#dbeafe',
    },
    {
      icon: <Quiz sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Mock Tests & Practice Papers',
      iconBg: '#dbeafe',
    },
    {
      icon: <Help sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Doubt Resolution Sessions',
      iconBg: '#dbeafe',
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 6,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: feature.iconBg,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                {feature.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#1f2937',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.4,
                }}
              >
                {feature.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CourseFeaturesSection;