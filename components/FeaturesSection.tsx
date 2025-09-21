'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { MenuBook, Person, TrendingUp, TrackChanges } from '@mui/icons-material';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MenuBook sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience in competitive exam preparation.',
      iconBg: '#dbeafe',
    },
    {
      icon: <Person sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Personalized Guidance',
      description: 'Get individual attention and customized study plans tailored to your learning pace and goals.',
      iconBg: '#dbeafe',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Proven Success Rate',
      description: 'Join thousands of successful candidates who achieved their dreams with our proven methodologies.',
      iconBg: '#dbeafe',
    },
    {
      icon: <TrackChanges sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Goal-Oriented Approach',
      description: 'Structured curriculum designed to help you crack competitive exams with confidence.',
      iconBg: '#dbeafe',
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8fafc' }}>
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
            Why Choose C.A.W.S?
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
            We combine expertise, personalization, and proven results to help you achieve your
            competitive exam goals.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center', height: '100%' }}>
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
                    mb: 2,
                    fontSize: '1.25rem',
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;