'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          alignItems: 'center', 
          gap: 6 
        }}
      >
        {/* Left Side - Content */}
        <Box sx={{ flex: 1, order: { xs: 2, lg: 1 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 3,
              color: '#1f2937',
            }}
          >
            Welcome to{' '}
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
                C.A.W.S.
              </Typography>
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Crack Aptitude With Sarika
          </Typography>

          <Typography
            sx={{
              color: '#4b5563',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            <strong>Crack Aptitude with Sarika</strong> - Your trusted partner in achieving
            competitive exam success through expert guidance, personalized
            coaching, and proven methodologies.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' }, mb: 6 }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(45deg, #3b82f6, #10b981)',
                  color: 'white',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #2563eb, #059669)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Start Your Journey
              </Button>
            </Link>
            
            <Link href="/courses" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#4b5563',
                  borderColor: '#d1d5db',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#3b82f6',
                    color: '#3b82f6',
                    backgroundColor: '#f8fafc',
                  },
                }}
              >
                View Courses
              </Button>
            </Link>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#3b82f6',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                1000+
              </Typography>
              <Typography sx={{ color: '#6b7280', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                Success Stories
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#10b981',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                10+
              </Typography>
              <Typography sx={{ color: '#6b7280', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                Years Experience
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Image */}
        <Box sx={{ flex: 1, order: { xs: 1, lg: 2 } }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: { xs: '300px', md: '400px' },
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            <Image
              src="/sarika-hero-image.jpg"
              alt="Sarika - CAWS Founder and Expert Instructor"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;