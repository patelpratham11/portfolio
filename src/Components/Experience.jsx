import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Container,
  Slide,
  Grid,
  Card,
  Box,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100%",
    background: "#4D6A6D",
    margin: 10,
    padding: 10,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    // minHeight: "100vh",
    // height: "fit-content",
    height: "100%",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#DCCCBB",
    marginTop: 5,
    fontFamily: "system-ui",
  },
  experienceCard: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2%",
    "&:hover": {
      boxShadow: "2px 3px 20px 10px black"
    },
  },
  chip: {
    marginRight: 10,
    color: "#F39A9D",
  },
}));

const experiences = [
  {
    name: "Protiviti",
    description:
      "I am an in-coming Technology Consultant Intern at Protiviti inc. This summer I will be working with the Emerging Technology Group (ETG). I plan on learning more about networking, client-facing roles, building and maintaining relationships, and becoming well-versed in the different groups of technology and the needs the industry faces right now",
    tags: ["here", "hello"],
  },
  {
    name: "PNC",
    description:
      "I also had the opportunity to spend a summer as an intern at PNC bank. I was a part of the Enterprise Data Risk Management (EDRM) Strategies Team. For 10-weeks, I was placed on this team in order to collaborate, present, identify, report, and manage risks that were surrounding the data. Our main objective was to effective manage and mitigate risks surrounding incomplete and inaccurate data. I assisted new programs set out by PNC regarding data use, data risks, and data quality. I worked heavily with the Analytics Competency Center and Model Risk Management throughout my various projects.My main project was to help collect and reconcile data ahead of an AI/ML audit that was coming in August 2022. I also played an integral part in chartering a new pilot program to keep track of which LOBs are using which platforms. We heavily leveraged database-related technologies such as Excel, Hadoop, and some SQL.",
    tags: ["here", "hello"],
  },
  {
    name: "Code Ninjas",
    description:
      "I had the opportunity to teach young children how to create video games in JavaScript. We used Code Ninja's Game Development Platform (GDP). I primarily worked with children between the ages of 5 and 13 with a focus on the older children who were creating more complex video games. I collaborated with the other Senseis and made sure that all of the children were being helped but also learning. As this was during COVID, we had to introduce a hybrid environment children and was able to help them hands-on.",
    tags: ["here", "hello"],
  },
];

export default function Experience() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section} id="Experience">
      <Container className={styles.container}>
        <Slide in={show} direction="right">
          <Grid container className={styles.gridContainer} direction="row">
            <Grid item>
              <Typography variant="h2" className={styles.name}>
                Experience
              </Typography>
            </Grid>

            {experiences.map((experience) => {
              return (
                <Card className={styles.experienceCard} variant="outlined">
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h4" style={{ color: "#F39A9D" }}>
                        {experience.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {experience.tags.map((tag) => {
                        return <Chip label={tag} className={styles.chip} />;
                      })}
                    </Grid>

                    <Typography variant="subtitle1">
                      {experience.description}
                    </Typography>
                  </Grid>
                </Card>
              );
            })}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
}
