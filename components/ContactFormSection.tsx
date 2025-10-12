"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { Send, CalendarToday, Download, Book } from '@mui/icons-material';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const courses = [
    'CAT (Common Admission Test)',
    'SNAP (Symbiosis National Aptitude Test)',
    'NMAT (NMIMS Management Aptitude Test)',
    'MBA-CET',
    'CMAT (Common Management Admission Test)',
    'Group Discussion & Personal Interviews',
    'IPMAT (Integrated Program in Management Aptitude Test)',
    'BBA (Bachelor of Business Administration)',
    'NPAT (National Test for Programs After Twelfth)',
    'Christ University Entrance Test (CUET)',
    'Hotel Management - NCHMJEE and HMCET',
    'SET (Symbiosis Entrance Test)',
    'BBA CET',
    'Other - Please specify in message'
  ];

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSelectChange = (event: any) => {
    setFormData({ ...formData, course: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*New Inquiry from C.A.W.S. Website*
    
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Course Interest:* ${formData.course}
*Message:* ${formData.message}

*Sent via C.A.W.S. Contact Form*`;

    // WhatsApp number (8788568664)
    const whatsappNumber = '+918788568664'; // Add country code for India
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after sending
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const quickActions = [
    {
      icon: <CalendarToday sx={{ fontSize: 20 }} />,
      text: "Schedule Demo Class",
      color: "#3b82f6"
    },
    {
      icon: <Download sx={{ fontSize: 20 }} />,
      text: "Download Brochure",
      color: "#059669"
    },
    {
      icon: <Book sx={{ fontSize: 20 }} />,
      text: "Book Counselling Session",
      color: "#dc2626"
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: '#f8fafc'
    }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: 'block', lg: 'flex' },
            gap: 6,
            alignItems: 'flex-start'
          }}
        >
          {/* Contact Form */}
          <Box sx={{ flex: 2, mb: { xs: 6, lg: 0 } }}>
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
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                mb: 6,
                fontSize: '1.1rem'
              }}
            >
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>

            <Card
              sx={{
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1e293b',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  📝 Contact Form
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                      gap: 3,
                      mb: 3
                    }}
                  >
                    <TextField
                      label="First Name *"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      required
                      placeholder="Enter your first name"
                    />
                    <TextField
                      label="Last Name *"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      required
                      placeholder="Enter your last name"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                      gap: 3,
                      mb: 3
                    }}
                  >
                    <TextField
                      label="Email Address *"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      placeholder="your.email@example.com"
                    />
                    <TextField
                      label="Phone Number *"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </Box>

                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Interested Course</InputLabel>
                    <Select
                      value={formData.course}
                      onChange={handleSelectChange}
                      label="Interested Course"
                    >
                      {courses.map((course) => (
                        <MenuItem key={course} value={course}>
                          {course}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    label="Message *"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    required
                    placeholder="Tell us about your goals, questions, or how we can help you..."
                    sx={{ mb: 4 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      px: 4,
                      py: 2,
                      borderRadius: 2,
                      textTransform: 'none',
                      width: '100%',
                      '&:hover': {
                        backgroundColor: '#2563eb',
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>

          {/* Quick Actions Sidebar */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                borderRadius: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'sticky',
                top: 100
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  ⚡ Quick Actions
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      startIcon={action.icon}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 'medium',
                        py: 2,
                        borderRadius: 2,
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }
                      }}
                    >
                      {action.text}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFormSection;