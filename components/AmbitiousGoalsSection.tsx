'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { People, Public, MenuBook, TrendingUp } from '@mui/icons-material';

const AmbitiousGoalsSection = () => {
  const goals = [
    {
      icon: <People sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Student Success',
      target: '10,000+ Students',
      description: 'Help 10,000+ students achieve their competitive exam goals by 2030',
      iconBg: '#fef3c7',
      targetColor: '#3b82f6',
    },
    {
      icon: <Public sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'National Presence',
      target: '50+ Cities',
      description: 'Expand our reach to 50+ cities across India with quality education',
      iconBg: '#fef3c7',
      targetColor: '#10b981',
    },
    {
      icon: <MenuBook sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Course Diversity',
      target: '100+ Exams',
      description: 'Develop comprehensive programs for 100+ different competitive exams',
      iconBg: '#fef3c7',
      targetColor: '#f59e0b',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Excellence Rate',
      target: '95%+ Success',
      description: 'Maintain our industry-leading 95%+ success rate across all programs',
      iconBg: '#fef3c7',
      targetColor: '#ef4444',
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#f8fafc' }}>
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
            Our Ambitious Goals
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
            Measurable targets that drive our commitment to excellence
          </Typography>
        </Box>

        {/* Goals Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {goals.map((goal, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: '20px',
                backgroundColor: 'white',
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
                  backgroundColor: goal.iconBg,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                {goal.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#1f2937',
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                {goal.title}
              </Typography>

              {/* Target */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: goal.targetColor,
                  mb: 2,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                {goal.target}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                }}
              >
                {goal.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AmbitiousGoalsSection;