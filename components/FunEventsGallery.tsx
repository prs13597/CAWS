'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';

const FunEventsGallery = () => {
  // Placeholder sections for events - can be updated with actual images later
  const eventSections = [
    {
      title: 'Academic Celebrations',
      description: 'Celebrating student achievements and academic milestones',
      images: [], // Will be populated with actual images
    },
    {
      title: 'Festival Celebrations',
      description: 'Joy and cultural celebrations throughout the year',
      images: [], // Will be populated with actual images
    },
    {
      title: 'Success Parties',
      description: 'Celebrating our students\' exam success and achievements',
      images: [], // Will be populated with actual images
    },
    {
      title: 'Interactive Sessions',
      description: 'Fun learning activities and engaging classroom moments',
      images: [], // Will be populated with actual images
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 3,
            }}
          >
            Our Event Gallery
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#6b7280',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Experience the joy, learning, and memorable moments at C.A.W.S. through our event gallery.
          </Typography>
        </Box>

        {/* Event Sections */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 6,
          }}
        >
          {eventSections.map((section, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Placeholder for images */}
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: '#e5e7eb',
                    borderRadius: '12px',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                    Event Photos Coming Soon
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1f2937',
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                  }}
                >
                  {section.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Note about upcoming photos */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#6b7280',
              fontStyle: 'italic',
            }}
          >
            More event photos and memories will be added soon. Stay tuned for updates!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FunEventsGallery;