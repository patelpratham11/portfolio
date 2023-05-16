import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "fit-content",
    minHeight: "100vh",
    // zIndex: 100,
    background: "#4D6A6D",
    margin: 25,
    padding: 10
  },
  container: {
    height: "100%",
    zIndex: 100, 
  },
  gridContainer: {
    height: "100%",
    zIndex: 100,
    alignItems:"center",
    justifyContent:"center"
  },
  name: {
    color: "#DCCCBB",
    marginTop: 5,
    fontFamily: "system-ui"
  },
}));

export default function About() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section}>
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Grid container className={styles.gridContainer}>
            <Grid item>
              <Typography variant="h2" className={styles.name}>
                About
              </Typography>
            </Grid>
            <Grid item>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">
                    My name is Pratham Patel and I am a Junior at the University
                    of Pittburgh. I am currently studying Computer Science with
                    a minor in Chemistry. Outside of classes, I love to read,
                    solve puzzles, work my mind, workout, and go on runs. I love
                    a good challenge, whether that's in the form of a math
                    question or a puzzle or if it's in the form of a CS project,
                    I'll get the job done. I have created this website as a way
                    to showcase my skills, my interests, my goals, what I have
                    accomplished, and most importantly, myself.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
}
