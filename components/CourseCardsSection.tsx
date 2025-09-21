'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent, Button, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Star, AccessTime, People } from '@mui/icons-material';

const CourseCardsSection = () => {
  const courses = [
    {
      title: 'Banking & Finance Preparation',
      badge: 'Most Popular',
      badgeColor: '#f59e0b',
      description: 'Comprehensive course covering all aspects of banking exams including IBPS, SBI, and RBI.',
      duration: '6 months',
      enrolled: '150+ enrolled',
      rating: 4.9,
      level: 'Beginner to Advanced',
      highlights: [
        'Quantitative Aptitude',
        'Reasoning',
        'English Language',
        'General Awareness',
        'Computer Knowledge'
      ],
      price: '₹25,000',
      originalPrice: '₹30,000',
      savings: 'Save ₹5000',
      buttonGradient: 'linear-gradient(45deg, #3b82f6, #f59e0b)',
    },
    {
      title: 'SSC Competitive Exams',
      description: 'Complete preparation for SSC CGL, CHSL, MTS and other Staff Selection Commission exams.',
      duration: '8 months',
      enrolled: '200+ enrolled',
      rating: 4.8,
      level: 'Intermediate',
      highlights: [
        'General Intelligence',
        'General Awareness',
        'Quantitative Aptitude',
        'English Comprehension'
      ],
      price: '₹20,000',
      originalPrice: '₹25,000',
      savings: 'Save ₹5000',
    },
    {
      title: 'UPSC Civil Services Preliminary',
      description: 'Foundational course for UPSC Civil Services Examination with comprehensive coverage.',
      duration: '12 months',
      enrolled: '80+ enrolled',
      rating: 4.9,
      level: 'Advanced',
      highlights: [
        'General Studies Paper I',
        'General Studies Paper II (CSAT)',
        'Current Affairs',
        'Essay Writing'
      ],
      price: '₹45,000',
      originalPrice: '₹50,000',
      savings: 'Save ₹5000',
    },
    {
      title: 'Railway Recruitment Board (RRB)',
      description: 'Specialized coaching for RRB NTPC, Group D, and other railway recruitment examinations.',
      duration: '4 months',
      enrolled: '120+ enrolled',
      rating: 4.7,
      level: 'Beginner to Intermediate',
      highlights: [
        'Mathematics',
        'General Intelligence',
        'General Awareness',
        'Technical Subjects'
      ],
      price: '₹18,000',
      originalPrice: '₹22,000',
      savings: 'Save ₹4000',
    },
    {
      title: 'State Government Jobs',
      description: 'Preparation for various state PSC exams and government job opportunities.',
      duration: '6 months',
      enrolled: '90+ enrolled',
      rating: 4.8,
      level: 'All Levels',
      highlights: [
        'State-specific Syllabus',
        'Current Affairs',
        'Aptitude',
        'Regional Languages'
      ],
      price: '₹22,000',
      originalPrice: '₹26,000',
      savings: 'Save ₹4000',
    },
    {
      title: 'Defence Services Examination',
      description: 'Complete preparation for NDA, CDS, AFCAT and other defence service examinations.',
      duration: '10 months',
      enrolled: '60+ enrolled',
      rating: 4.9,
      level: 'Intermediate to Advanced',
      highlights: [
        'Mathematics',
        'English',
        'General Knowledge',
        'Current Affairs',
        'SSB Interview Prep'
      ],
      price: '₹35,000',
      originalPrice: '₹40,000',
      savings: 'Save ₹5000',
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 3,
            }}
          >
            Choose Your Path to Success
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
            Expertly designed courses to match your career aspirations
          </Typography>
        </Box>

        {/* Courses Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {courses.map((course, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: '20px',
                boxShadow: course.badge ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: course.badge ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              {/* Popular Badge */}
              {course.badge && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: 20,
                    zIndex: 1,
                  }}
                >
                  <Chip
                    label={course.badge}
                    sx={{
                      backgroundColor: course.badgeColor,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      px: 1,
                    }}
                  />
                </Box>
              )}

              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Course Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1f2937',
                    mb: 2,
                    fontSize: { xs: '1.3rem', md: '1.4rem' },
                  }}
                >
                  {course.title}
                </Typography>

                {/* Course Description */}
                <Typography
                  sx={{
                    color: '#6b7280',
                    lineHeight: 1.6,
                    mb: 3,
                    fontSize: '0.95rem',
                  }}
                >
                  {course.description}
                </Typography>

                {/* Course Stats */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTime sx={{ fontSize: 16, color: '#6b7280' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {course.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <People sx={{ fontSize: 16, color: '#6b7280' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {course.enrolled}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Star sx={{ fontSize: 16, color: '#fbbf24' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {course.rating}
                    </Typography>
                  </Box>
                </Box>

                {/* Level */}
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: '#3b82f6',
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                >
                  {course.level}
                </Typography>

                {/* Course Highlights */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1f2937',
                    mb: 2,
                    fontSize: '1rem',
                  }}
                >
                  Course Highlights:
                </Typography>

                <List sx={{ py: 0, mb: 3, flex: 1 }}>
                  {course.highlights.map((highlight, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <CheckCircle sx={{ fontSize: 16, color: '#10b981' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={highlight}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          color: '#4b5563',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                {/* Pricing */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1f2937',
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                      }}
                    >
                      {course.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#9ca3af',
                        textDecoration: 'line-through',
                        fontSize: '1rem',
                      }}
                    >
                      {course.originalPrice}
                    </Typography>
                  </Box>
                  <Chip
                    label={course.savings}
                    size="small"
                    sx={{
                      backgroundColor: '#dcfce7',
                      color: '#166534',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: course.buttonGradient || '#3b82f6',
                      color: 'white',
                      borderRadius: '12px',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        background: course.buttonGradient || '#2563eb',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Enroll Now
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: '#6b7280',
                      borderColor: '#d1d5db',
                      borderRadius: '12px',
                      py: 1.5,
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#3b82f6',
                        color: '#3b82f6',
                        backgroundColor: '#f8fafc',
                      },
                    }}
                  >
                    View Detailed Syllabus
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CourseCardsSection;