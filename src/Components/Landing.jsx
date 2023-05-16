import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles, Grid, Container, Typography, Hidden, Slide, Box } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import Socials from './Socials'
import Typed from 'react-typed'


const useStyles = makeStyles((theme) =>({
    section:{
        height: "100vh",
        width: "100%",
        zIndex: 100, 
    }, 
    typer:{
        marginBottom: 300, 
        zIndex: 120,
        backgroundColor: "rgba(0,0,0,0.6)", 
        color: "#F3DFA2",
        fontFamily: "system-ui",
        padding: 10
    },
    container:{
        height: "100%", 
        zIndex: 100,
        position: "absolute",
    }, 
    gridContainer:{
        height: "100%",
        zIndex: 100,
        marginTop: 180
    }, 
    name:{
        // backgroundColor: "rgba(0,0,0,0.4)", 
        color: "#DCCCBB",
        fontFamily: "system-ui",
        marginBottom: 170
    }, 
    backgroundImage:{
        height: "100%", 
        width: "fit-content", 
        position: "absolute", 
        zIndex: 2
    }
}))



export default function Landing() {
    const styles = useStyles()
    const [show, setShow] = useState(false)
    useEffect(() =>{
        setShow(true)
    }, [])

  return (
    
    <Box className={styles.section}>
        <StaticImage className={styles.backgroundImage} src='http://drive.google.com/uc?export=view&id=1aPO_rii9zU75_B68f2Z12EP9WVPDDWK8'/>
        <Container maxWidth="lg" className={styles.container}>
            <Slide in={show} direction='right'>
                <Grid container justifyContent='space-between' className={styles.gridContainer}>
                    <Grid item >
                        <Typography variant='h2' className={styles.name} >Hi, I'm Pratham!</Typography>
                        <Typography variant='h4' className={styles.typer} ><Typed
                    strings={[
                        'I am a student',
                        'I am a developer',
                        'I am a learner',
                        'I am a photographer',
                        'I am an engineer',
                        'I am an opportunity',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed></Typography>
                    </Grid>
                    {/* <Grid item >
                    <Typography variant='h4' className={styles.typer} ><Typed
                    strings={[
                        'I am a student',
                        'I am a developer',
                        'I am a learner',
                        'I am a photographer',
                        'I am an engineer',
                        'I am an opportunity',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed></Typography>
                        
                    </Grid> */}
                    <Hidden xsDown>
                        <Grid item>
                            <Socials/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Slide>
        </Container>
    </Box>
  )
}
