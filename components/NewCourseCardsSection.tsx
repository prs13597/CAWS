'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';

const NewCourseCardsSection = () => {
  const postGraduateCourses = [
    {
      title: 'CAT (Common Admission Test)',
      description: 'A national-level entrance exam for admission into MBA and PGDM programs at top B-schools like the IIMs. It tests candidates on quantitative ability, data interpretation, logical reasoning, and verbal skills. CAT is highly competitive and held annually across India.',
    },
    {
      title: 'SNAP (Symbiosis National Aptitude Test)',
      description: 'A national-level entrance exam conducted by Symbiosis International University for admission into its MBA and PGDM programs. It assesses candidates on quantitative ability, verbal reasoning, logical reasoning, and general knowledge. Multiple attempts are allowed.',
    },
    {
      title: 'NMAT (NMIMS Management Aptitude Test)',
      description: 'A national-level entrance exam conducted by GMAC for admission into MBA and PGDM programs at NMIMS and other B-schools. It assesses candidates on quantitative skills, language proficiency, and logical reasoning. Multiple attempts are allowed.',
    },
    {
      title: 'MBA-CET',
      description: 'A state-level entrance exam for admission to MBA/MMS programs in Maharashtra. It tests Logical Reasoning, Quantitative Aptitude, Verbal Ability, and Abstract Reasoning. Top colleges like JBIMS and SIMSREE accept the scores for admission.',
    },
    {
      title: 'CMAT (Common Management Admission Test)',
      description: 'A national-level entrance exam for admission to MBA and PGDM programs in India. It evaluates candidates on Verbal Ability, Quantitative Techniques, Logical Reasoning, General Awareness, and Data Interpretation skills.',
    },
    {
      title: 'Group Discussion & Personal Interviews',
      description: 'Comprehensive training for group discussions and personal interviews to help students excel in the final rounds of MBA admissions.',
    },
  ];

  const underGraduateCourses = [
    {
      title: 'IPMAT (Integrated Program in Management Aptitude Test)',
      description: 'An entrance exam for admission into the 5-year Integrated Management Programs at IIMs like Indore, Rohtak, and others. IPMAT offers a direct path to an MBA after 12th grade.',
    },
    {
      title: 'BBA (Bachelor of Business Administration)',
      description: 'A 3-year undergraduate program that provides foundational knowledge in business and management. It covers subjects like marketing, finance, human resources, and operations. BBA prepares students for managerial roles or higher studies like MBA.',
    },
    {
      title: 'NPAT (National Test for Programs After Twelfth)',
      description: 'An entrance exam conducted by NMIMS for admission into its undergraduate programs, including BBA, B.Com, and B.Sc. It tests candidates on quantitative ability, reasoning, and language skills, held annually across India.',
    },
    {
      title: 'NPAT for Liberal Arts and Psychology',
      description: 'The National Test for Programs After Twelfth conducted by NMIMS for Liberal Arts and Psychology programs.',
    },
    {
      title: 'Christ University Entrance Test (CUET)',
      description: 'Conducted for admission into various undergraduate programs, including BBA, B.Com, and law. It evaluates candidates on subjects like verbal ability, reasoning, quantitative aptitude, and general knowledge. The exam is held annually.',
    },
    {
      title: 'Hotel Management - NCHMJEE and HMCET',
      description: 'Master the art of hospitality with our comprehensive Hotel Management course. Learn essential skills in food & beverage service, front office operations, housekeeping, revenue management, and guest relations. Gain hands-on experience.',
    },
    {
      title: 'SET (Symbiosis Entrance Test)',
      description: 'The SET exam at Symbiosis assesses candidates for undergraduate programs in law, design, and more. It evaluates skills in logical reasoning, general awareness, and English proficiency, ensuring students are prepared for rigorous academic challenges.',
    },
    {
      title: 'BBA CET (Bachelor of Business Administration Common Entrance Test)',
      description: 'An entrance exam for admission into BBA programs, focusing on English, quantitative aptitude, logical reasoning, and general awareness. Conducted by universities like IPU, it evaluates students\' analytical and business skills.',
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl">
        {/* Post Graduate Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 6,
              textAlign: 'center',
            }}
          >
            POST GRADUATE ENTRANCE EXAMS
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {postGraduateCourses.map((course, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
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
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1f2937',
                      mb: 3,
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#6b7280',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Under Graduate Section */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 6,
              textAlign: 'center',
            }}
          >
            UNDER GRADUATE ENTRANCE EXAMS
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {underGraduateCourses.map((course, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
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
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1f2937',
                      mb: 3,
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#6b7280',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {course.description}
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

export default NewCourseCardsSection;