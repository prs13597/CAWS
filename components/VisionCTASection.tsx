"use client";

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Rocket, Handshake } from '@mui/icons-material';

const VisionCTASection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-50%',
          left: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Box textAlign="center">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              color: 'white',
              mb: 3,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Be Part of Our Vision
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            Join us in transforming education and creating opportunities that change lives. 
            Together, we can build a future where quality education knows no boundaries.
          </Typography>

          <Box
            sx={{
              display: { xs: 'block', sm: 'flex' },
              justifyContent: 'center',
              gap: 3,
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Rocket />}
              sx={{
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                px: 4,
                py: 2,
                borderRadius: 2,
                textTransform: 'none',
                mb: { xs: 2, sm: 0 },
                minWidth: 200,
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                }
              }}
            >
              Join Our Mission
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Handshake />}
              sx={{
                borderColor: 'white',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                px: 4,
                py: 2,
                borderRadius: 2,
                textTransform: 'none',
                minWidth: 200,
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                  borderWidth: 2,
                }
              }}
            >
              Partner With Us
            </Button>
          </Box>

          <Box mt={8}>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1rem',
                fontStyle: 'italic'
              }}
            >
              "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionCTASection;