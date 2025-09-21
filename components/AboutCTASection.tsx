'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const AboutCTASection = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: 'white',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Be Part of Our Success Story
          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.6,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Join thousands of successful candidates who transformed their careers with C.A.W.S
          </Typography>

          {/* Action Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: '#3b82f6',
              borderRadius: '30px',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#f8fafc',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
              },
              transition: 'all 0.3s ease',
              minWidth: { xs: '200px', sm: 'auto' },
            }}
          >
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutCTASection;