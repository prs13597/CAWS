'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { EmojiObjects } from '@mui/icons-material';

const OurStorySection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* Left Side - Story Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: '#1f2937',
                mb: 4,
              }}
            >
              Our Story
            </Typography>

            <Typography
              sx={{
                color: '#4b5563',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              C.A.W.S. began as a dream to revolutionize competitive exam preparation. Founded by
              Sarika, an accomplished educator with a passion for unlocking student potential, our
              institute was built on the foundation of efficient learning and proven methodologies.
            </Typography>

            <Typography
              sx={{
                color: '#4b5563',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              What started as a small coaching center has grown into a renowned institution, trusted
              by many students. Our success lies in our unwavering commitment to understanding each 
              student's unique strengths and challenges.
            </Typography>

            <Typography
              sx={{
                color: '#4b5563',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              Today, C.A.W.S. stands as a testament to the power of dedicated mentorship, innovative
              teaching methods, and the relentless pursuit of excellence in education.
            </Typography>

            <Button
              variant="contained"
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
              Join Our Success Story
            </Button>
          </Box>

          {/* Right Side - Mission Card */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '20px',
                p: 6,
                textAlign: 'center',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                maxWidth: '400px',
                width: '100%',
              }}
            >
              {/* Mission Icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: '#dbeafe',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                <EmojiObjects sx={{ fontSize: 40, color: '#3b82f6' }} />
              </Box>

              {/* Mission Title */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#1f2937',
                  mb: 3,
                }}
              >
                Our Mission
              </Typography>

              {/* Mission Description */}
              <Typography
                sx={{
                  color: '#6b7280',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                }}
              >
                To empower every student with the knowledge, skills, and confidence
                needed to excel in competitive examinations and achieve their career
                aspirations through innovative teaching methodologies and
                personalized guidance.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurStorySection;