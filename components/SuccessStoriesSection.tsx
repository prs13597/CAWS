'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { Star } from '@mui/icons-material';

const SuccessStoriesSection = () => {
  const successStories = [
    {
      name: 'Priya Sharma',
      achievement: 'AIR 45 - Banking Exam',
      testimonial: '"C.A.W.S helped me transform my preparation strategy. The personalized approach made all the difference."',
      rating: 5,
      achievementColor: '#22c55e',
    },
    {
      name: 'Rahul Gupta',
      achievement: 'AIR 23 - Government Exam',
      testimonial: '"The expert guidance and comprehensive study material at C.A.W.S are unmatched."',
      rating: 5,
      achievementColor: '#3b82f6',
    },
    {
      name: 'Anjali Patel',
      achievement: 'AIR 67 - Competitive Exam',
      testimonial: '"Thanks to C.A.W.S, I not only cleared the exam but exceeded my own expectations."',
      rating: 5,
      achievementColor: '#f59e0b',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        sx={{
          fontSize: 20,
          color: index < rating ? '#fbbf24' : '#e5e7eb',
        }}
      />
    ));
  };

  return (
    <Box sx={{ py: 10, backgroundColor: 'white' }}>
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
            Success Stories
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
            Hear from our successful candidates who achieved their dreams with C.A.W.S
          </Typography>
        </Box>

        {/* Success Stories Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {successStories.map((story, index) => (
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
              <CardContent sx={{ p: 4 }}>
                {/* Achievement Badge */}
                <Box sx={{ mb: 3 }}>
                  <Chip
                    label={story.achievement}
                    sx={{
                      backgroundColor: story.achievementColor,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      borderRadius: '12px',
                    }}
                  />
                </Box>

                {/* Name */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1f2937',
                    mb: 2,
                    fontSize: '1.2rem',
                  }}
                >
                  {story.name}
                </Typography>

                {/* Testimonial */}
                <Typography
                  sx={{
                    color: '#4b5563',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: '0.95rem',
                  }}
                >
                  {story.testimonial}
                </Typography>

                {/* Rating */}
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {renderStars(story.rating)}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStoriesSection;