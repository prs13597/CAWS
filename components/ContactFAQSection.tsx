"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent
} from '@mui/material';
import { ExpandMore, LocationOn } from '@mui/icons-material';

const ContactFAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is the admission process?",
      answer: "Visit our campus or call us to schedule a counseling session. We'll assess your goals and recommend the best course for you."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, practice papers, and access to our digital library for all enrolled students."
    },

    {
      question: "Can I attend demo classes?",
      answer: "Absolutely! We offer free demo classes to help you understand our teaching methodology before enrollment."
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: '#ffffff'
    }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: 'block', lg: 'flex' },
            gap: 6,
            alignItems: 'flex-start'
          }}
        >
          {/* FAQ Section */}
          <Box sx={{ flex: 2, mb: { xs: 6, lg: 0 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: '#1e293b',
                mb: 6
              }}
            >
              Frequently Asked Questions
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    '&:before': {
                      display: 'none',
                    },
                    mb: 1
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      backgroundColor: expanded === `panel${index}` ? '#f8fafc' : 'white',
                      borderRadius: expanded === `panel${index}` ? '8px 8px 0 0' : 2,
                      '& .MuiAccordionSummary-content': {
                        margin: '16px 0',
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1e293b',
                        fontSize: '1.1rem'
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '0 0 8px 8px'
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.7
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>

          {/* Visit Campus Card */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                borderRadius: 3,
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                color: 'white',
                position: 'sticky',
                top: 100
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  <LocationOn sx={{ fontSize: 40 }} />
                </Box>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Visit Our Campus
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    opacity: 0.9
                  }}
                >
                  Experience our learning environment firsthand
                </Typography>
                
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 2,
                    p: 2,
                    color: '#1e293b'
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    Open for Visits
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFAQSection;