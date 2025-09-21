'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    { name: 'Vision', path: '/vision' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ color: '#2563eb', fontWeight: 'bold' }}>
          C.A.W.S
        </Typography>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                  📚
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#2563eb', fontWeight: 'bold', fontSize: '20px' }}>
                  C.A.W.S
                </Typography>
                <Typography sx={{ color: '#6b7280', fontSize: '12px' }}>
                  Turning potential into performance
                </Typography>
              </Box>
            </Box>

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