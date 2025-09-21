"use client";

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { TrendingUp, School, Business, Science } from '@mui/icons-material';

const CurrentInitiativesSection: React.FC = () => {
  const initiatives = [
    {
      icon: <TrendingUp sx={{ fontSize: 48, color: '#2563eb' }} />,
      title: "Digital Learning Revolution",
      description: "Transforming education through innovative online platforms and AI-powered learning experiences that adapt to each student's needs.",
      status: "In Progress",
      statusColor: "primary"
    },
    {
      icon: <School sx={{ fontSize: 48, color: '#7c3aed' }} />,
      title: "Scholarship Program",
      description: "Making quality education accessible to underprivileged students through comprehensive scholarship programs and financial aid.",
      status: "Active",
      statusColor: "success"
    },
    {
      icon: <Business sx={{ fontSize: 48, color: '#dc2626' }} />,
      title: "Industry Partnerships",
      description: "Building strategic alliances with leading companies to create direct pathways from education to employment opportunities.",
      status: "Expanding",
      statusColor: "warning"
    },
    {
      icon: <Science sx={{ fontSize: 48, color: '#059669' }} />,
      title: "Research & Development",
      description: "Continuous innovation in educational methodologies and technologies to enhance learning outcomes and student success.",
      status: "Ongoing",
      statusColor: "info"
    }
  ];

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
            Current Initiatives
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
            Discover our ongoing projects and initiatives that are shaping the future of education and student success
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4
          }}
        >
          {initiatives.map((initiative, index) => (
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
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      mb: 3
                    }}
                  >
                    <Box>
                      {initiative.icon}
                    </Box>
                    <Chip
                      label={initiative.status}
                      color={initiative.statusColor as any}
                      variant="filled"
                      sx={{
                        fontWeight: 'medium',
                        fontSize: '0.875rem'
                      }}
                    />
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1e293b',
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {initiative.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}
                  >
                    {initiative.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
      </Container>
    </Box>
  );
};

export default CurrentInitiativesSection;