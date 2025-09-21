'use client';

import React from 'react';
import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Courses', 'Vision', 'Contact', 'Student Portal', 'Results & Updates'];
  
  const ourCourses = [
    'Banking & Finance Preparation',
    'SSC Competitive Exams',
    'UPSC Civil Services',
    'Railway Recruitment Board',
    'State Government Jobs',
    'Defence Services Examination'
  ];

  return (
    <Box sx={{ backgroundColor: '#1f2937', color: 'white' }}>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 6,
          }}
        >
          {/* Logo and Description */}
          <Box sx={{ gridColumn: { xs: '1', lg: '1' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                  📚
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                  C.A.W.S
                </Typography>
                <Typography sx={{ color: '#9ca3af', fontSize: '12px' }}>
                  Turning potential into performance
                </Typography>
              </Box>
            </Box>
            
            <Typography sx={{ color: '#d1d5db', lineHeight: 1.6, mb: 3, fontSize: '0.9rem' }}>
              <strong>Crack Aptitude with Sarika</strong> – Your trusted partner in achieving competitive 
              exam success through expert guidance and proven methodologies.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: '#374151',
                    color: '#9ca3af',
                    width: 40,
                    height: 40,
                    '&:hover': {
                      backgroundColor: '#3b82f6',
                      color: 'white',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: '#d1d5db',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: '#3b82f6',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Our Courses */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
              Our Courses
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {ourCourses.map((course, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: '#d1d5db',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: '#3b82f6',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {course}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOn sx={{ color: '#3b82f6', fontSize: 20, mt: 0.5 }} />
                <Box>
                  <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    C.A.W.S Coaching Institute
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                    123 Education Street<br />
                    Knowledge City, Delhi - 110001
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#3b82f6', fontSize: 20 }} />
                <Box>
                  <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                    +91 98765 43210
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                    +91 87654 32109
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#3b82f6', fontSize: 20 }} />
                <Box>
                  <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                    info@caws.edu.in
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                    admissions@caws.edu.in
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 6, borderColor: '#374151' }} />

        {/* Copyright and Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography sx={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            © 2024 C.A.W.S Coaching Institute. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Student Code of Conduct'].map((link, index) => (
              <Typography
                key={index}
                sx={{
                  color: '#9ca3af',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#3b82f6',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;