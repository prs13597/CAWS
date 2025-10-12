'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Fun Events', path: '/fun-events' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/caws-logo.jpg"
              alt="C.A.W.S. Logo"
              width={30}
              height={30}
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ color: '#1a365d', fontFamily: 'Canvas Sans, Arial, sans-serif', fontWeight: 'bold' }}>
            C.A.W.S.
          </Typography>
        </Box>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.path} style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f59e0b',
              color: 'white',
              borderRadius: '25px',
              px: 3,
              py: 1,
              fontWeight: 'bold',
              mx: 'auto',
              '&:hover': {
                backgroundColor: '#d97706',
              },
            }}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/caws-logo.jpg"
                    alt="C.A.W.S. Logo"
                    width={50}
                    height={50}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: '#1a365d', fontFamily: 'Canvas Sans, Arial, sans-serif', fontWeight: 'bold', fontSize: '20px' }}>
                    C.A.W.S.
                  </Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: '12px' }}>
                    Crack Aptitude With Sarika
                  </Typography>
                </Box>
              </Box>
            </Link>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {menuItems.map((item, index) => (
                <Link key={item.name} href={item.path} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: pathname === item.path ? '#3b82f6' : '#6b7280',
                      fontWeight: pathname === item.path ? 'bold' : 'normal',
                      backgroundColor: pathname === item.path ? '#dbeafe' : 'transparent',
                      borderRadius: '20px',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        backgroundColor: '#f3f4f6',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#d97706',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#6b7280' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;