import React, { useState, useEffect } from 'react'
import { makeStyles, Paper, Typography, Container, Slide, Grid, Card, IconButton, Chip, Hidden, CardContent, Box } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import { Link } from 'gatsby'
import { shadows } from '@mui/system';

const useStyles = makeStyles((theme) =>({
    section:{
        height: "100%",
        background: "#4D6A6D",
        margin: 25,
        boxShadow: 12,
        padding: 10
    }, 
    container:{
        height: "100%",
        alignItems:"center",
        justifyContent:"center",
    }, 
    gridContainer:{
        height: "100%",
        // zIndex: 100,
        justifyContent:"center",
    }, 
    name:{
        color: "#DCCCBB", 
        marginTop: 5,
        fontFamily: "system-ui"
    }, 
    projectGrid:{
        textAlign: "center", 
        width: "100vw",
        alignItems:"center",
        justifyContent:"center",
    },
    projectCard:{
        marginTop: 15,
    }, 
    projectExtra:{ 
        marginTop: 25
    }, 
    chip:{
        marginRight: 10,
        color: "#F39A9D",
    }
}))

const projects = [
    {
        name: "Beefin'", 
        tags: ["React.js", "Java Spring Boot"], 
        description: "Lorem ipsum",
        link: ""
    }, 
    {
        name: "Beefin'", 
        tags: ["React.js", "Java Spring Boot"], 
        description: "Lorem ipsum",
        link: ""
    }, 
    {
        name: "Beefin'", 
        tags: ["React.js", "Java Spring Boot"], 
        description: "Lorem ipsum",
        link: ""
    }, 
    {
        name: "Beefin'", 
        tags: ["React.js", "Java Spring Boot"], 
        description: "Lorem ipsum",
        link: ""
    }, 
    {
        name: "Beefin'", 
        tags: ["React.js", "Java Spring Boot"], 
        description: "Lorem ipsum",
        link: ""
    }, 
    // {
    //     name: "Beefin'", 
    //     tags: ["React.js", "Java Spring Boot"], 
    //     description: "Lorem ipsum",
    //     link: ""
    // }, 
    // {
    //     name: "Beefin'", 
    //     tags: ["React.js", "Java Spring Boot"], 
    //     description: "Lorem ipsum",
    //     link: ""
    // }, 
    // {
    //     name: "Beefin'", 
    //     tags: ["React.js", "Java Spring Boot"], 
    //     description: "Lorem ipsum",
    //     link: ""
    // }
]


export default function Projects() {
    const styles = useStyles()
    const [show, setShow] = useState(false)
    useEffect(() =>{
        setShow(true)
    }, [])
    return (
        <Box className={styles.section}>
            {/* <Paper sx={{background: "#4D6A6D"}} > */}
            <Container className={styles.container}>
            <Slide in={show} direction='right'>
                <Grid container className={styles.gridContainer}>
                    <Grid item>
                        <Typography variant='h2' className={styles.name}>Projects</Typography>
                    </Grid>
                    <Grid item className={styles.projectGrid}>
                    {projects.map((project) =>{
                        return(
                                <Card className={styles.projectCard} variant='outlined' rounded>
                                    <CardContent>
                                    <Typography variant='h4' style={{color: "#F39A9D"}}>{project.name}</Typography>
                                    <Typography variant='subtitle2'>{project.description}</Typography>
                                    <Grid container justifyContent='space-between'>
                                        <Grid item className={styles.projectExtra}>
                                            <Link href={project.link}>
                                                <IconButton>
                                                    <GitHub />
                                                </IconButton>
                                            </Link>
                                        </Grid>
                                        <Hidden xsDown>
                                            <Grid item className={styles.projectExtra} direction='row'>
                                            {project.tags.map((tag)=>{
                                                return (
                                                    <Chip label={tag} className={styles.chip}/>
                                                );
                                            })}
                                            </Grid>
                                        </Hidden>
                                        
                                    </Grid>
                                    </CardContent>
                                </Card>
                        );
                    })}
                    </Grid>
                    
                </Grid>
            </Slide>
        </Container>
        {/* </Paper> */}
        </Box>
        
    )
}
