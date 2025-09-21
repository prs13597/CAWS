"use client";

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ContactHeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
            color: '#1e293b',
            mb: 4
          }}
        >
          Get in <span style={{ color: '#3b82f6' }}>Touch</span>
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            color: '#64748b',
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontWeight: 300,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Ready to start your journey towards success? We're here to help!
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#64748b',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Whether you have questions about our courses, need guidance on exam preparation, or want to 
          schedule a demo class, our team is ready to assist you.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactHeroSection;