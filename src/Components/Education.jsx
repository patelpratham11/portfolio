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
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  section: {
    height: "100%",
    background: "#4D6A6D",
    margin: 25,
    padding: 10
  },
  container: {
    height: "100%",
    alignItems:"center",
    justifyContent:"center",
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
    fontFamily: "system-ui"
  },
  experienceCard: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2%",
  },
}));

const experiences = [
  {
    name: "PNC",
    description:
      "I also had the opportunity to spend a summer as an intern at PNC bank. I was a part of the Enterprise Data Risk Management (EDRM) Strategies Team. For 10-weeks, I was placed on this team in order to collaborate, present, identify, report, and manage risks that were surrounding the data. Our main objective was to effective manage and mitigate risks surrounding incomplete and inaccurate data. I assisted new programs set out by PNC regarding data use, data risks, and data quality. I worked heavily with the Analytics Competency Center and Model Risk Management throughout my various projects.My main project was to help collect and reconcile data ahead of an AI/ML audit that was coming in August 2022. I also played an integral part in chartering a new pilot program to keep track of which LOBs are using which platforms. We heavily leveraged database-related technologies such as Excel, Hadoop, and some SQL.",
  },
  {
    name: "PNC",
    description:
      "I also had the opportunity to spend a summer as an intern at PNC bank. I was a part of the Enterprise Data Risk Management (EDRM) Strategies Team. For 10-weeks, I was placed on this team in order to collaborate, present, identify, report, and manage risks that were surrounding the data. Our main objective was to effective manage and mitigate risks surrounding incomplete and inaccurate data. I assisted new programs set out by PNC regarding data use, data risks, and data quality. I worked heavily with the Analytics Competency Center and Model Risk Management throughout my various projects.My main project was to help collect and reconcile data ahead of an AI/ML audit that was coming in August 2022. I also played an integral part in chartering a new pilot program to keep track of which LOBs are using which platforms. We heavily leveraged database-related technologies such as Excel, Hadoop, and some SQL.",
  },
  {
    name: "PNC",
    description:
      "I also had the opportunity to spend a summer as an intern at PNC bank. I was a part of the Enterprise Data Risk Management (EDRM) Strategies Team. For 10-weeks, I was placed on this team in order to collaborate, present, identify, report, and manage risks that were surrounding the data. Our main objective was to effective manage and mitigate risks surrounding incomplete and inaccurate data. I assisted new programs set out by PNC regarding data use, data risks, and data quality. I worked heavily with the Analytics Competency Center and Model Risk Management throughout my various projects.My main project was to help collect and reconcile data ahead of an AI/ML audit that was coming in August 2022. I also played an integral part in chartering a new pilot program to keep track of which LOBs are using which platforms. We heavily leveraged database-related technologies such as Excel, Hadoop, and some SQL.",
  },
];

export default function Experience() {
  const styles = useStyles();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Box className={styles.section}>
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
                  <Typography variant="h4" style={{color: "#F39A9D"}}>{experience.name}</Typography>
                  <Typography variant="subtitle2">
                    {experience.description}
                  </Typography>
                </Card>
              );
            })}
          </Grid>
        </Slide>
      </Container>
    </Box>
  );
}
