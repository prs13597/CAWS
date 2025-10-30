'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';

const FunEventsGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // 2024 Results Images
  const results2024 = [
    '10.png', '11.png', '12.png', '13.png', '15.png', '16.png', '17.png', '18.png',
    '19.png', '20.png', '21.png', '24.png', '25.png', '27.png', '28.png', '29.png',
    '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png',
    '38.png', '39.png', '40.png', '41.png', '42.png', '43.png', '44.png', '45.png',
    '46.png', '47.png', '48.png', '49.png', '50.png', '51.png', '52.png', '53.png',
    '54.png', '55.png', '56.png', '57.png'
  ];

  // 2025 Results Images
  const results2025 = [
    '8.png', '9.png', '10.png', '11.png', '15.png', '16.png', '17.png',
    '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png',
    '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png',
    '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.jpg'
  ];

  const [currentIndex2024, setCurrentIndex2024] = useState(0);
  const [currentIndex2025, setCurrentIndex2025] = useState(0);

  const itemsPerSlide = isMobile ? 1 : 3;
  const maxSlides2024 = Math.ceil(results2024.length / itemsPerSlide);
  const maxSlides2025 = Math.ceil(results2025.length / itemsPerSlide);

  const handlePrev2024 = () => {
    setCurrentIndex2024((prev) => (prev === 0 ? maxSlides2024 - 1 : prev - 1));
  };

  const handleNext2024 = () => {
    setCurrentIndex2024((prev) => (prev === maxSlides2024 - 1 ? 0 : prev + 1));
  };

  const handlePrev2025 = () => {
    setCurrentIndex2025((prev) => (prev === 0 ? maxSlides2025 - 1 : prev - 1));
  };

  const handleNext2025 = () => {
    setCurrentIndex2025((prev) => (prev === maxSlides2025 - 1 ? 0 : prev + 1));
  };

  const renderCarousel = (images: string[], currentIndex: number, year: string, onPrev: () => void, onNext: () => void) => {
    const startIdx = currentIndex * itemsPerSlide;
    const visibleImages = images.slice(startIdx, startIdx + itemsPerSlide);

    return (
      <Box sx={{ mb: 8 }}>
        {/* Year Title */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 'bold',
            color: '#1f2937',
            mb: 4,
            textAlign: 'center',
          }}
        >
          {year} Results
        </Typography>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', px: { xs: 5, md: 7 } }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={onPrev}
            sx={{
              position: 'absolute',
              left: { xs: 0, md: 0 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            <ChevronLeft sx={{ fontSize: 32, color: '#3b82f6' }} />
          </IconButton>

          <IconButton
            onClick={onNext}
            sx={{
              position: 'absolute',
              right: { xs: 0, md: 0 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#f3f4f6',
              },
            }}
          >
            <ChevronRight sx={{ fontSize: 32, color: '#3b82f6' }} />
          </IconButton>

          {/* Images Grid with Slide Animation */}
          <Box
            key={currentIndex}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              px: { xs: 3, md: 4 },
              overflow: 'hidden',
              animation: 'carouselSlide 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '@keyframes carouselSlide': {
                from: {
                  opacity: 0,
                  transform: 'translateX(100%)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            {visibleImages.map((image, idx) => (
              <Box
                key={`${year}-${startIdx + idx}`}
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '450px' },
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease',
                  animation: `cardSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.15}s both`,
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
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
                }}
              >
                <Image
                  src={`/${year} results/${image}`}
                  alt={`${year} Result ${startIdx + idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Indicators */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            {Array.from({ length: year === '2024' ? maxSlides2024 : maxSlides2025 }).map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: currentIndex === idx ? 32 : 8,
                  height: 8,
                  borderRadius: '4px',
                  backgroundColor: currentIndex === idx ? '#3b82f6' : '#d1d5db',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => year === '2024' ? setCurrentIndex2024(idx) : setCurrentIndex2025(idx)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl">
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
            Our Event Gallery
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
            Celebrating our students' success and achievements over the years.
          </Typography>
        </Box>

        {/* 2025 Results Carousel */}
        {renderCarousel(results2025, currentIndex2025, '2025', handlePrev2025, handleNext2025)}

        {/* 2024 Results Carousel */}
        {renderCarousel(results2024, currentIndex2024, '2024', handlePrev2024, handleNext2024)}
      </Container>
    </Box>
  );
};

export default FunEventsGallery;