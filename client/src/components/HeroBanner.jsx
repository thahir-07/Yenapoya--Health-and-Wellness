import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import fitness from '../assets/images/fitness.gif';
import '../assets/css/styles.css'
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#5F30DF" fontWeight="800" fontSize="65px">Fit Hub</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="serif" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#5F30DF', padding: '14px', fontSize: '22px', fontFamily: 'sans-serif', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#5F30DF" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={fitness} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
