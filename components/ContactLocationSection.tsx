"use client";

import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { LocationOn, Directions, Map } from '@mui/icons-material';

const ContactLocationSection: React.FC = () => {
  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: '#f8fafc'
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
            Find Us Here
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
            Located in the heart of the education district for easy accessibility
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            gap: 6,
            alignItems: 'center'
          }}
        >
          {/* Map Placeholder */}
          <Box sx={{ flex: 2, mb: { xs: 6, md: 0 } }}>
            <Card
              sx={{
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  height: 400,
                  background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <Map sx={{ fontSize: 80, color: '#64748b' }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: '#64748b',
                    fontWeight: 'medium'
                  }}
                >
                  Interactive Map
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    textAlign: 'center',
                    maxWidth: '300px'
                  }}
                >
                  Click "View in Maps" below to see our exact location and get directions
                </Typography>
              </Box>
            </Card>
          </Box>

          {/* Location Details */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#3b82f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <LocationOn sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1e293b',
                    mb: 3
                  }}
                >
                  C.A.W.S Coaching Institute
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#64748b',
                    mb: 4,
                    lineHeight: 1.6
                  }}
                >
                  123 Education Street, Knowledge City, Delhi - 110001, India
                </Typography>
                
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Directions />}
                    sx={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#2563eb',
                      }
                    }}
                  >
                    Get Directions
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<Map />}
                    sx={{
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#2563eb',
                        backgroundColor: '#f0f9ff',
                      }
                    }}
                  >
                    View in Maps
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactLocationSection;