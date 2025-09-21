'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Person, Schedule, Group, MenuBook } from '@mui/icons-material';

const JourneyNumbersSection = () => {
  const statistics = [
    {
      icon: <Person sx={{ fontSize: 40, color: '#3b82f6' }} />,
      number: '500+',
      label: 'Successful Candidates',
      iconBg: '#dbeafe',
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: '#10b981' }} />,
      number: '10+',
      label: 'Years of Excellence',
      iconBg: '#d1fae5',
    },
    {
      icon: <Group sx={{ fontSize: 40, color: '#f59e0b' }} />,
      number: '50+',
      label: 'Expert Mentors',
      iconBg: '#fef3c7',
    },
    {
      icon: <MenuBook sx={{ fontSize: 40, color: '#ef4444' }} />,
      number: '25+',
      label: 'Course Programs',
      iconBg: '#fee2e2',
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 3,
            }}
          >
            Our Journey in Numbers
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
            A decade of dedication reflected in our achievements
          </Typography>
        </Box>

        {/* Statistics Grid */}
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
          {statistics.map((stat, index) => (
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
                  backgroundColor: stat.iconBg,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                {stat.icon}
              </Box>

              {/* Number */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 1,
                  background: 'linear-gradient(45deg, #3b82f6, #10b981)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {stat.number}
              </Typography>

              {/* Label */}
              <Typography
                sx={{
                  color: '#6b7280',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 'medium',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default JourneyNumbersSection;