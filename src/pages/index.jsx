import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing'
import About from '../Components/About';
import Projects from '../Components/Projects';
import Experience from '../Components/Experience';
import Education from '../Components/Education';

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background:{
      paper: "#30343F"
    },
  },
  typography: {
    fontFamily: "system-ui"
  },
});

export default function index(){
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Navbar />
    <Landing />
    <About />
    <Projects />
    <Experience />
    <Education />
  </ThemeProvider>
  );
}