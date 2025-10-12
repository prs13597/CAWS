'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { Whatshot, Star, PersonOutline, TrendingUp } from '@mui/icons-material';

const CoreValuesSection = () => {
  const coreValues = [
    {
      icon: <Whatshot sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Excellence',
      description: 'We strive for nothing less than excellence in every aspect of our coaching methodology.',
      iconBg: '#fef3c7',
    },
    {
      icon: <Star sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Innovation',
      description: 'Constantly evolving our teaching methods with the latest educational technologies and practices.',
      iconBg: '#dbeafe',
    },
    {
      icon: <PersonOutline sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Personalization',
      description: 'Every student is unique, and we tailor our approach to match individual learning styles and goals.',
      iconBg: '#d1fae5',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Results',
      description: 'Our commitment to delivering measurable results drives everything we do at C.A.W.S.',
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
            Our Core Values
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
            The principles that guide everything we do at C.A.W.S.
          </Typography>
        </Box>

        {/* Values Grid */}
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
          {coreValues.map((value, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                '&:hover': {
                  transform: 'translateY(-8px)',
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
                    backgroundColor: value.iconBg,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {value.icon}
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
                  {value.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;