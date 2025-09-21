"use client";

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { LocationOn, Phone, Email, Schedule } from '@mui/icons-material';

const ContactInfoSection: React.FC = () => {
  const contactCards = [
    {
      icon: <LocationOn sx={{ fontSize: 48, color: '#3b82f6' }} />,
      title: "Visit Our Campus",
      content: [
        "C.A.W.S Coaching Institute",
        "123 Education Street, Knowledge City",
        "Delhi - 110001, India"
      ],
      buttonText: "Get Directions",
      buttonColor: "primary"
    },
    {
      icon: <Phone sx={{ fontSize: 48, color: '#059669' }} />,
      title: "Call Us",
      content: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Monday to Saturday: 9 AM - 7 PM"
      ],
      buttonText: "Call Now",
      buttonColor: "success"
    },
    {
      icon: <Email sx={{ fontSize: 48, color: '#dc2626' }} />,
      title: "Email Us",
      content: [
        "info@caws.edu.in",
        "admissions@caws.edu.in",
        "We respond within 24 hours"
      ],
      buttonText: "Send Email",
      buttonColor: "error"
    },
    {
      icon: <Schedule sx={{ fontSize: 48, color: '#7c3aed' }} />,
      title: "Office Hours",
      content: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 4:00 PM",
        "National Holidays: Closed"
      ],
      buttonText: "View Schedule",
      buttonColor: "secondary"
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: '#ffffff'
    }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1e293b',
              mb: 3
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#64748b',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Multiple ways to reach us and get the support you need
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4
          }}
        >
          {contactCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              <CardContent 
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Box mb={3}>
                    {card.icon}
                  </Box>
                  
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1e293b',
                      mb: 3,
                      fontSize: '1.25rem'
                    }}
                  >
                    {card.title}
                  </Typography>
                  
                  <Box mb={4}>
                    {card.content.map((line, lineIndex) => (
                      <Typography
                        key={lineIndex}
                        variant="body2"
                        sx={{
                          color: '#64748b',
                          mb: 1,
                          fontSize: '0.95rem',
                          lineHeight: 1.5
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                
                <Button
                  variant="contained"
                  color={card.buttonColor as any}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 'medium',
                    py: 1.5
                  }}
                >
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfoSection;