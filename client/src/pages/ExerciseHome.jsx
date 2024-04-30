import React, { Fragment, useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import { Navbar } from '../components/Navbar';
import '../assets/css/styles.css'
function ExerciseHome() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
  
  return (
    <Fragment>
    <Navbar/>
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
    </Fragment>

  )
}

export default ExerciseHome;
