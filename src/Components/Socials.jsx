import React from 'react'
import { IconButton, Grid, Link, makeStyles } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'


const socials = [
    {
        icon: GitHub, url: "https://github.com/patelpratham11"
    }, 
    {
        icon: LinkedIn, url: "https://www.linkedin.com/in/patelpratham11/"
    }
]

const useStyles = makeStyles((theme) =>({
    icons:{
        height: 60,
        width: 60, 
    }
}))

export default function Socials() {
    const styles = useStyles()
  return (
    // <Hidden >
        <Grid container direction='column'>
            {socials.map((social)=>{
               return( 
               <Grid item key={social.url}>
                    <Link href={social.url}>
                        <IconButton>
                            <social.icon fontSize='large' />
                        </IconButton>
                    </Link>
                </Grid>
                        
            )})}
        </Grid>
        
    //</Hidden>
  )
}
