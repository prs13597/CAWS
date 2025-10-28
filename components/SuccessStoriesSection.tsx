'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Star, ChevronLeft, ChevronRight } from '@mui/icons-material';

const SuccessStoriesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  const successStories = [
    {
      name: 'Adishree Sakhare',
      achievement: 'MNLU Aurangabad (CLAT)',
      testimonial: '"Thank you for being a truly outstanding teacher. Your passion for teaching and your dedication to your students is obvious in everything you do. You did more than prepare me academically, you prepared me for life."',
      rating: 5,
      achievementColor: '#22c55e',
    },
    {
      name: 'Adishree Chandak',
      achievement: 'NMIMS Mumbai (BBA), Manipal',
      testimonial: '"Sarika ma\'am is the best teacher anyone could get. Being a weak student in maths to solving problems in one minute time - the journey was beautiful just because of Sarika ma\'am. Thank you for the patience and the time ma\'am."',
      rating: 5,
      achievementColor: '#3b82f6',
    },
    {
      name: 'Swaraj Chhajed',
      achievement: 'IHM GOA',
      testimonial: '"This dream would\'ve remained a dream without you ma\'am, you always were the bestest teacher, mentor and the bestest friend."',
      rating: 5,
      achievementColor: '#f59e0b',
    },
    {
      name: 'Disha Mohane',
      achievement: 'JBIMS - Jamnalal Bajaj Institute',
      testimonial: '"As a student I couldn\'t have asked for any better teacher. You have helped me grow academically, mentally and emotionally. Thank you for being the most amazing teacher."',
      rating: 5,
      achievementColor: '#ec4899',
    },
    {
      name: 'Vatan Patel',
      achievement: 'MAT - 99.43 Percentile',
      testimonial: '"Sarika ma\'am\'s teaching methodology has improved my problem solving skills and has also helped me ace aptitude and reasoning in my entrance exam. Her teaching skills are unique & rare."',
      rating: 5,
      achievementColor: '#8b5cf6',
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

  const itemsPerSlide = isMobile ? 1 : 2;
  const maxSlides = Math.ceil(successStories.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxSlides - 1 : prevIndex - 1
    );
  };

  const getVisibleStories = () => {
    const startIdx = currentIndex * itemsPerSlide;
    return successStories.slice(startIdx, startIdx + itemsPerSlide);
  };

  // Reset index when screen size changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

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
            Hear from our successful candidates who achieved their dreams with C.A.W.S.
          </Typography>
        </Box>

        {/* Success Stories Carousel */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, md: 4 },
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: { xs: 'static', md: 'absolute' },
              left: { md: -60 },
              backgroundColor: '#3b82f6',
              color: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#2563eb',
                transform: 'scale(1.1) translateX(-4px)',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
              zIndex: 10,
            }}
          >
            <ChevronLeft sx={{ transition: 'transform 0.3s ease' }} />
          </IconButton>

          {/* Carousel Container */}
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              borderRadius: '16px',
              perspective: '1000px',
            }}
          >
            <Box
              key={currentIndex}
              sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: 4,
                width: '100%',
                animation: 'carouselSlide 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '@keyframes carouselSlide': {
                  from: {
                    transform: 'translateX(100%)',
                  },
                  to: {
                    transform: 'translateX(0)',
                  },
                },
              }}
            >
              {getVisibleStories().map((story, index) => (
                <Card
                  key={`${currentIndex}-${index}`}
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e5e7eb',
                    animation: `cardSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`,
                    '@keyframes cardSlide': {
                      from: {
                        opacity: 0,
                        transform: 'translateX(60px)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
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
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: { xs: 'static', md: 'absolute' },
              right: { md: -60 },
              backgroundColor: '#3b82f6',
              color: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#2563eb',
                transform: 'scale(1.1) translateX(4px)',
                boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
              zIndex: 10,
            }}
          >
            <ChevronRight sx={{ transition: 'transform 0.3s ease' }} />
          </IconButton>
        </Box>

        {/* Carousel Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 6,
          }}
        >
          {Array.from({ length: maxSlides }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: index === currentIndex ? `indicatorPulse 0.5s ease-out` : 'none',
                '@keyframes indicatorPulse': {
                  '0%': {
                    transform: 'scale(0.8)',
                    boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)',
                  },
                  '50%': {
                    boxShadow: '0 0 0 6px rgba(59, 130, 246, 0)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                    boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)',
                  },
                },
                '&:hover': {
                  backgroundColor: '#3b82f6',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStoriesSection;