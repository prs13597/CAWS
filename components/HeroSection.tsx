'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          alignItems: 'center', 
          gap: { xs: 4, md: 6 }
        }}
      >
        {/* Left Side - Content */}
        <Box sx={{ flex: 1, order: { xs: 2, lg: 1 }, px: { xs: 1, sm: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: { xs: 2, md: 3 },
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
              mb: { xs: 2, md: 4 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Crack Aptitude With Sarika
          </Typography>

          <Typography
            sx={{
              color: '#4b5563',
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            <strong>Crack Aptitude with Sarika</strong> - Your trusted partner in achieving
            competitive exam success through expert guidance, personalized
            coaching, and proven methodologies.
          </Typography>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, flexDirection: { xs: 'column', sm: 'row' }, mb: { xs: 4, md: 6 } }}>
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
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
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
        <Box sx={{ flex: 1, order: { xs: 1, lg: 2 }, width: '100%' }}>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              height: { xs: '214px', sm: '320px', md: '400px' }
            }}
          >
            <Image
              src="/sarika-hero-image.jpg"
              alt="Sarika - CAWS Founder and Expert Instructor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;