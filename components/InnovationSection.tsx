"use client";

import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Psychology, Group, Timeline, EmojiEvents } from '@mui/icons-material';

const InnovationSection: React.FC = () => {
  const impactStats = [
    {
      icon: <Group sx={{ fontSize: 32, color: '#2563eb' }} />,
      value: "50,000+",
      label: "Students Reached"
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 32, color: '#059669' }} />,
      value: "12,000+",
      label: "Success Stories"
    },
    {
      icon: <Timeline sx={{ fontSize: 32, color: '#dc2626' }} />,
      value: "1M+",
      label: "Future Target by 2030"
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: '#ffffff'
    }}>
      <Container maxWidth="lg">
        {/* Innovation at the Core Section */}
        <Box 
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            gap: 8,
            mb: 10
          }}
        >
          <Box sx={{ flex: 1, mb: { xs: 6, md: 0 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: '#1e293b',
                mb: 4
              }}
            >
              Innovation at the Core
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                mb: 4
              }}
            >
              At C.A.W.S., innovation isn't just a buzzword—it's the foundation of everything we do. 
              We constantly evolve our teaching methodologies, embrace cutting-edge technology, and 
              create learning experiences that prepare our students for tomorrow's challenges.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7
              }}
            >
              Our commitment to innovation drives us to push boundaries, question conventional 
              approaches, and develop solutions that make quality education accessible to everyone, 
              everywhere.
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
              }}
            >
              <Psychology 
                sx={{ 
                  fontSize: { xs: 80, md: 120 }, 
                  color: 'white' 
                }} 
              />
            </Box>
          </Box>
        </Box>

        {/* Global Impact Vision Section */}
        <Box>
          <Box textAlign="center" mb={6}>
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
              Global Impact Vision
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              Our vision extends beyond borders, aiming to create a global network of empowered learners
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4
            }}
          >
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                sx={{
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
                    '&:last-child': { pb: 4 }
                  }}
                >
                  <Box mb={2}>
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1e293b',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      fontWeight: 'medium'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InnovationSection;