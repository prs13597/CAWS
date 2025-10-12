'use client';

import React from 'react';
import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Vision', href: '/vision' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const ourCourses = [
    'CAT (Common Admission Test)',
    'SNAP (Symbiosis National Aptitude Test)',
    'NMAT (NMIMS Management Aptitude Test)',
    'MBA-CET',
    'CMAT (Common Management Admission Test)',
    'IPMAT (Integrated Program)',
    'BBA (Bachelor of Business Administration)',
    'NPAT (National Test)',
    'Christ University Entrance Test (CUET)',
    'Hotel Management - NCHMJEE',
    'SET (Symbiosis Entrance Test)',
    'BBA CET'
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
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  padding: '4px',
                }}
              >
                <Image
                  src="/caws-logo.jpg"
                  alt="C.A.W.S. Logo"
                  width={62}
                  height={62}
                  style={{ 
                    borderRadius: '50%', 
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                  C.A.W.S.
                </Typography>
                <Typography sx={{ color: '#9ca3af', fontSize: '12px' }}>
                  Crack Aptitude With Sarika
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
                <Link 
                  key={index}
                  href={link.href} 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
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
                    {link.name}
                  </Typography>
                </Link>
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
                <Link 
                  key={index}
                  href="/courses" 
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
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
                </Link>
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
                    C.A.W.S. Coaching Institute
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: 1.4 }}>
                    4th Floor, Maruti Plaza B - Wing<br />
                    Keshavrao More Marg, Vidya Vikas Cir,<br />
                    above Shagun Tadka Hotel<br />
                    Nashik, Maharashtra 422005
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#3b82f6', fontSize: 20 }} />
                <Box>
                  <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                    8788568664
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                    Mon-Sat: 10am-8pm, Sun: 10am-2pm
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#3b82f6', fontSize: 20 }} />
                <Box>
                  <Typography sx={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                    caws.academy@gmail.com
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                    We respond within 24 hours
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
            © 2024 C.A.W.S. Coaching Institute. All rights reserved.
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